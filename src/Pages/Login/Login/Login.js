import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo2.png';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    let errorTemplate;
    if(error) {
        errorTemplate = <p className='text-danger'>{error.message}</p>
    }
    if(loading) {
        return <Loading></Loading>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if(user) {
        console.log(user)
        navigate(from, {replace: true});
    }
    return (
        <div>
            <div className='form d-flex justify-content-center align-items-center'>
            <div>
                <img className='img-fluid mb-5 d-block mx-auto' style={{height: '80px'}} src={logo} alt="logo" />
                <form onSubmit={handleLogin} className='login-form'>
                    <input type="email" name="email" placeholder='Email' required />
                    <div className="password">
                      <input type={show ? 'text' : 'password'} name="password" placeholder='Confirm Password' required />
                      <span><FontAwesomeIcon onClick={() => setShow(!show)} icon={show ? faEyeSlash : faEye}></FontAwesomeIcon></span>
                    </div>
                    {errorTemplate}
                    <input type="submit" value="Login" className='submit-btn' />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;