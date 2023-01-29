import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../src/styles/App.css"
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./features/firebase";
import { login, logout, selectUser } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logging in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logging out
        dispatch(logout());
      }
    });

    return unsubscribe;
  
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
         <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div> 
  );
}

export default App;