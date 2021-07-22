import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-page'>
            <div className="reg-form">
                <h4>Create an Account</h4>
                <form action="">
                    <input type="text" name="name" id="" placeholder="Your Name" /> <br />

                    <input type="text" name="email" id="" placeholder="Your Email" /> <br />

                    <input type="text" name="password" id="" placeholder="Password" /> <br />

                    <input type="text" name="Confirm Password" id="" placeholder="Confirm Password" /> <br />
                    <input type="submit" value="Create An Account" id="submit" /> <br />
                </form>
                <p >Already have an account? <a href="/">Login Here</a></p>
            </div>


            <div className="login-form">
                <h4>Log In</h4>
                <form action="">
                    <input type="text" name="name" id="" placeholder="Your Name" /> <br />

                    <input type="text" name="email" id="" placeholder="Your Email" /> <br />

                    <input type="text" name="password" id="" placeholder="Password" /> <br />

                    <input type="text" name="Confirm Password" id="" placeholder="Confirm Password" /> <br />
                    <input type="submit" value="Log In" id="submit" /> <br />
                </form>
                <p >Don't have an account? <a href="/">Create Account</a></p>
            </div>
        </div>
    );
};

export default Login;