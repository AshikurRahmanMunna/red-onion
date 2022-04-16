import React from 'react';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='notfound mt-5 pt-5'>
            <img className='mx-auto d-block' src={notFound} alt="Page not Found" />
        </div>
    );
};

export default NotFound;