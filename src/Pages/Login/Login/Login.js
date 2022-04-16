import React from 'react';
import logo from '../../../images/logo2.png';

const Login = () => {
    return (
        <div>
            <div className='form d-flex justify-content-center align-items-center'>
            <div>
                <img className='img-fluid mb-5 d-block mx-auto' style={{height: '80px'}} src={logo} alt="logo" />
                <form className='login-form'>
                    <input type="email" name="email" placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <input type="submit" className='submit-btn' />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;