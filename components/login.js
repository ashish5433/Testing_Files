// components/Login.js

import React, { useEffect } from 'react';
import styles from '../styles/Login.module.css';

const Login = () => {
    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        const handleSignUpClick = () => {
            container.classList.add("right-panel-active");
        };

        const handleSignInClick = () => {
            container.classList.remove("right-panel-active");
        };

        signUpButton.addEventListener('click', handleSignUpClick);
        signInButton.addEventListener('click', handleSignInClick);

        // Cleanup event listeners on component unmount
        return () => {
            signUpButton.removeEventListener('click', handleSignUpClick);
            signInButton.removeEventListener('click', handleSignInClick);
        };
    }, []);

    return (
        <div className={styles.container} id="container">
            <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1}>Create Account</h1>
                    {/* <div className={styles.socialContainer}>
                        <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                    </div> */}
                    <span className={styles.span}>or use your email for registration</span>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="email" placeholder="Email" />
                    <input className={styles.input} type="password" placeholder="Password" />
                    <button className={styles.button}>Sign Up</button>
                </form>
            </div>
            <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1}>Sign in</h1>
                    {/* <div className={styles.socialContainer}>
                        <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
                    </div> */}
                    <span className={styles.span}>or use your account</span>
                    <input className={styles.input} type="email" placeholder="Email" />
                    <input className={styles.input} type="password" placeholder="Password" />
                    <a className={styles.a} href="#">Forgot your password?</a>
                    <button className={styles.button}>Sign In</button>
                </form>
            </div>
            <div className={styles.overlayContainer}>
                <div className={styles.overlay}>
                    <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                        <h1 className={styles.h1}>Welcome Back!</h1>
                        <p  className={styles.p}>To keep connected with us please login with your personal info</p>
                        <button className={`${styles.ghost} ${styles.button}`} id="signIn">Sign In</button>
                    </div>
                    <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                        <h1 className={styles.h1}>Hello, Friend!</h1>
                        <p  className={styles.p}>Enter your personal details and start journey with us</p>
                        <button  className={`${styles.ghost} ${styles.button}`}  id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
            {/* <footer>
                <p  className={styles.p}>
                    Created with <i className="fa fa-heart"></i> by
                    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
                    - Read how I created this and how you can join the challenge
                    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
                </p>
            </footer> */}
        </div>
    );
};

export default Login;
