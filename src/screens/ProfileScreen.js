import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from "../features/counter/userSlice"
import { auth } from "../features/firebase"
import Nav from '../components/Nav'
import "../styles/ProfileScreen.css"

function ProfileScreen() {
const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt=""
            />
            <div className='profileScreen_details'>
                <h2>{user.email}</h2>
                <div className="profileScreen_plans">

                    <button 
                    onClick={() => auth.signOut()}
                    className='profileScreen_signout'>Sign Out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen