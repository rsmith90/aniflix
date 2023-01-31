import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { db } from '../features/firebase';
import { loadStripe } from "@stripe/stripe-js"
import "../styles/PlanScreen.css"

function PlanScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser)
    const [subscription, setSubscription] = useState(null);

    // snapping the products subscribed roles
    useEffect(() => {
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get().then((querySnapshot) =>  {
            querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                });
            });
        });
    }, [user.uid]);

    // snapping the products
    useEffect(() => {
        db.collection("products")
        .where("active", "==", true)
        .get()
        .then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ("prices").get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].price = {
                        priceId: price.id,
                        priceData: price.data()
                    };
                });
            });
            setProducts(products)
        });
    }, []);

    // console.log(products);
    console.log(subscription);

    // stripe auto redirect check out feature
    const loadCheckout = async (priceId) => {
        const docRef = await db.collection("customers")
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data();

            if(error) {
                alert(`An error occured ${error.message}`)
            }

            if (sessionId) {
                const stripe = await loadStripe(
                    // stripe public test key
                    "pk_test_51MW3uCErJ9BSD9bvHwBWy1B6bvmgEV892FUnUFOKnswbywL0ML9D3nFmCitU7VjKLymEkMyLg2VIkQ0Ap41tRh3U00rkWZujdc"
                );

                stripe.redirectToCheckout({ sessionId });
            }
        });
    };

  return (
    <div className='planScreen'>
        <br />
        {subscription && (<p>Renewal date: {new Date(subscription?.cuirrenty_period_end * 1000).toLocaleDateString()}</p>)}
        {Object.entries(products).map(([productId, productData]) => {

            const isCurrentPackage = productData.name
            ?.toLowerCase()
            .includes(subscription?.role);

            return (
                <div 
                 key={productId}
                 className={`${
                    isCurrentPackage && "planScreen_plan--disabled"
                    } planScreen_plan`}>
                    <div className='planScreen_info'>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button 
                        onClick={() => 
                        !isCurrentPackage && loadCheckout(productData.prices.priceId)
                        }
                    >
                        {isCurrentPackage ? "Current Package" : "Subscribe"}
                    </button>
                </div>
            )
        })}
    </div>
  );
}

export default PlanScreen