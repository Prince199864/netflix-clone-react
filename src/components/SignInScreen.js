import React from 'react'
import "./SignInScreen.css";
import { useRef } from 'react';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const SignInScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();


    //The screen refreshes when the button is clicked hence loading the loginScreen component and removing the signin screen. To prevent it , created the functions below :-

    // For signUp
    const register = (e) => {
        e.preventDefault();

        // createUserWithEmailAndPassword method is provided by Firebase Authentication in JavaScript. It's used to create a new user account with the specified email address and password.
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        })
        navigate("/")
    }

    // For signIn
    const signIn = (e) => {
        e.preventDefault();

        // signInWithEmailAndPassword method is also provided by Firebase Authentication in JavaScript. It's used to sign in a user with their email address and password combination
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch(error => {
            alert(error.message);
        })
        navigate("/")
    }

    return (
        <div className='signinScreen'>
            <form className='signin_form'>
                <h1 className="signin_heading">Sign In</h1>
                <div className="signIn_inputs">
                    <input ref={emailRef} className='signin_input' type='email' placeholder='Email' />
                    <input ref={passwordRef} className='signin_input' type='password' placeholder='Password' />
                </div>
                <button onClick={signIn} className='signin_submitbutton'>Sign In</button>
                <h4 className='signup_newHead'>New to Netflix? <span><a onClick={register}>Sign up now.</a></span></h4>
            </form>
        </div>
    )
}

export default SignInScreen
