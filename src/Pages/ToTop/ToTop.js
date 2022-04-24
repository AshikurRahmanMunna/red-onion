import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './ToTop.css';

const ToTop = () => {
    const [show, setShow] = useState(false);
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300) {
            setShow(true)
        }
        else {
            setShow(false);
        }
    })
    return (
        <div className={show ? 'd-block' : 'd-none'}>
            <div className='to-top'>
            <a href="#"><FontAwesomeIcon className={`to-top-icon`} beatFade icon={faAnglesUp} /></a>
            </div>
        </div>
    );
};

export default ToTop;