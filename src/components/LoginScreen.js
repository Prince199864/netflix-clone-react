import React, { useState } from 'react'
import './LoginScreen.css'
import img from '../images/logo.png'
import arrow from '../images/arrow.svg'
import SignInScreen from './SignInScreen';
const LoginScreen = () => {
    const [signin, setSignin] = useState(false);
    console.log(signin);
    return (
        <div className='loginScreen'>
            <div className='nav_login'>
                <div className="nav_login_contents">
                    <img className='nav_login_logo' src={img} alt="logo" />
                    <button onClick={() => {
                        setSignin(true);
                    }} style={(signin === false ? { display: "block" } : { display: "none" })} className='login_button'>Sign In</button>
                </div>
            </div>
            {/* <div className="loginScreen_body"> */}
            {signin === true ? (<SignInScreen/>) :
                (<div className="loginScreen_body">
                    <h1 className='login_heading'>Unlimited movies, TV shows and more</h1>
                    <p className='login_para1'>Watch anywhere. Cancel anytime.</p>
                    <p className='login_para2'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="loginScreen_input">
                        <form>
                            <div className="loginScreen_email">
                                <input className="loginScreen_input_email" type="email" name="login_email" id="login_mail" />
                                <label className="loginScreen_label_email" htmlFor="login_mail">Email Address</label>
                            </div>
                            <button onClick={() => { setSignin(true) }} className='loginScreen_input_button'>Get Started <img src={arrow} /></button>
                        </form>
                    </div>
                </div>
                )}
            {/* </div> */}
            <div className="login_background_black">

            </div>
        </div>
    )
}

export default LoginScreen
