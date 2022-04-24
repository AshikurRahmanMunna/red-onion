import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if(loading) {
        <Loading></Loading>
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if(user.providerData[0].providerId === 'password' && user.emailVerified === false) {
        return <Navigate to="/verify" state={{ from: location }} replace />
    }
    return (
        <div>
            
        </div>
    );
};

export default RequireAuth;