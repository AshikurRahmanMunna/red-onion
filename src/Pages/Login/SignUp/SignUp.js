import React, { useState } from 'react';
import './SignUp.css';
import logo from '../../../images/logo2.png';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [errorMessage, setErrorMessage] = useState('')
      const handleCreateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        if(password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            setErrorMessage('');
        }
        else {
            setErrorMessage('Both Passwords are not same');
        }
      }
    return (
        <div className='form d-flex justify-content-center align-items-center'>
            <div>
                <img className='img-fluid mb-5 d-block mx-auto' style={{height: '80px'}} src={logo} alt="logo" />
                <form onSubmit={handleCreateUser} className='login-form'>
                    <input type="text" name="name" placeholder='Name' />
                    <input type="email" name="email" placeholder='Email' />
                    <input type="password" name="password" placeholder='Password' />
                    <input type="password" name="confirm" placeholder='Confirm Password' />
                    <p className='text-danger'>{errorMessage}</p>
                    <input type="submit" className='submit-btn' />
                </form>
            </div>
        </div>
    );
};

export default SignUp;