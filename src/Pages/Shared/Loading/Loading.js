import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Spinner style={{width: '200px', height: '200px'}} animation="grow" variant="danger" />
        </div>
    );
};

export default Loading;