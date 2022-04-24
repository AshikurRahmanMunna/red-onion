import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const NotEmailVerified = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, errorSending] = useSendEmailVerification(auth);
    if(user?.providerData[0]?.providerId !== 'password') {
        navigate('/');
    }
    if(sending || loading) {
        return <Loading></Loading>
    }
    const sendVerification = async () => {
        await sendEmailVerification(user.email);
        toast(`Email verification sent to ${user.email}`)
    }
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <div className='d-block mx-auto'>
                <h2 className='text-danger'>You are not verified your account.</h2>
                <h5 className='text-success'>You can also verify your account now.</h5>
                <button onClick={sendVerification} className='btn btn-danger'>Send Verification Email</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default NotEmailVerified;