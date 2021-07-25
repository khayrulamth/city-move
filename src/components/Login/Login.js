import React, { useState } from 'react';
import './Login.css';
import google from '../../Icons/google.png';
import facebook from '../../Icons/facebook.png';
import github from '../../Icons/github.png';
import { handleCreateAccount, handleFbSignIn, handleGithubSignIn, handleGoogleSignIn, manageInitialize, signInWithEmailAndPassword } from './LoginManager';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

manageInitialize();
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [register, setRegister] = useState(false);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        password: '',
        photo: '',
        error: '',
    });

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 3;
            console.log(isFieldValid);
        }
        if (e.target.name === 'email') {
            const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            isFieldValid = regexEmail.test(e.target.value);
            console.log(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            const passHasNum = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passHasNum;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const createAccount = (e) => {
        setNewUser(!newUser);
        if (newUser && user.email && user.password) {
            handleCreateAccount(user.email, user.password)
                .then((res) => {
                    setUser(res);
                    setLoggedInUser(res);
                    history.replace(from);
                    console.log('New User Found');
                })
            console.log(user.email);
        }
        e.preventDefault();
        console.log('clicked');
    }

    const signIn = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUserInfo = res;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('login successful');
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        e.preventDefault();
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((res) => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
                console.log('google');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then((res) => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
                console.log('fb');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const gitHubSignIn = () => {
        handleGithubSignIn()
            .then((res) => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
                console.log('Github');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="hero">
            <div className="form-box">
                <div className="button-box">
                    <div id="btn"></div>
                    {
                        register ? <button onClick={() => setRegister(false)} name="loginButton" type="button" className="toggle-btn">I have an Account</button> : <button onClick={() => setRegister(true)} type="button" className="toggle-btn">Create An Account</button>
                    }

                </div>
                <div className="social-icons">
                    <img onClick={googleSignIn} src={google} alt="Google" />
                    <img onClick={fbSignIn} src={facebook} alt="Facebook" />
                    <img onClick={gitHubSignIn} src={github} alt="Github" />
                </div>
                {
                    register ?
                        <form id="register" className="input-group">
                            <p>Create a new account:</p>
                            <input onBlur={handleBlur} type="text" className='input-field' placeholder='Name' name="displayName" id="" required />

                            <input onBlur={handleBlur} type="email" className='input-field' placeholder='Email' name="email" id="" required />

                            <input onBlur={handleBlur} type="password" className='input-field' placeholder='Password' name="password" id="" required />

                            <input onBlur={handleBlur} type="password" className='input-field' placeholder='Confirm Password' name="confirmPassword" id="" required />

                            <input type="checkbox" className='checkbox' name="" id="" /> <span>I agree to the terms & conditions</span>

                            <button onClick={createAccount} type="submit" className="submit-btn"> Register </button>
                        </form>
                        :
                        <form action="#" id="login" className="input-group">
                            <p>Log in with Email and Password:</p>
                            <input onBlur={handleBlur} type="email" className='input-field' placeholder='Email' name="email" id="" required />

                            <input onBlur={handleBlur} type="password" className='input-field' placeholder='Password' name="password" id="" required />
                            <input type="checkbox" className='checkbox' name="" id="" /> <span>Remember Password</span>
                            <button onClick={signIn} type="submit" className="submit-btn"> Log in </button>
                        </form>
                }
            </div>
        </div>
    );
};

export default Login;