import React, { useState } from 'react'
import SignUpScreen from "./SignUpScreen"
import "../styles/LoginScreen.css"

function LoginScreen() {
const [signIn, setSignIn] = useState(false);
 
  return (
    <div className='loginScreen'>
        <div className='nav_background'>
          <h1 className='loginScreen_logo'>AniFlix</h1>
          <button 
            onClick={() => setSignIn(true)}
            className='loginScreen_button'>
            Sign In
          </button>
          <div className='loginScreen_gradient'/>
        </div>
        
          <div className="loginScreen_backround">
            <img 
              src="https://external-preview.redd.it/2SRhl749JDfaJWRcZ39oVm0Jl3sHQ1w6ROlBHTfioOw.jpg?auto=webp&s=4ec9c1f47bcb66a3aadf0c5d75ba265657e11be0"
              alt=''
            />
          </div>

          <div className='loginScreen_body'>
            {signIn ? (
              <SignUpScreen />
            ) : (
              <>
                <h1>Unlimited movie, TV programs and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className='loginScreen_input'>
                  <form>
                    <input type="email"
                      placeholder='Email Address'
                    />
                    <button 
                      onClick={() => setSignIn(true)}
                      className='loginScreen_getStarted'>
                        Get Started
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

    </div>
  )
}

export default LoginScreen