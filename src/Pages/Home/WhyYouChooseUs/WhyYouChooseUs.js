import React from 'react';
import './WhyYouChooseUs.css';
import chooseUs1 from '../../../images/choose-us-1.png'
import chooseUs2 from '../../../images/choose-us-2.png'
import chooseUs3 from '../../../images/choose-us-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBusSimple, faTruck } from '@fortawesome/free-solid-svg-icons';
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard';

const WhyYouChooseUs = () => {
    const chooseUsCard = [
        {
            id: 1,
            title: 'Fast Delivery',
            description: 'Keep your system in sync with automated web hooks based notifications each time link is paid and how we dream about our future.',
            img: chooseUs1,
            icon: faBusSimple
        },
        {
            id: 2,
            title: 'A good auto responder',
            description: 'Keep your system in sync with automated web hooks based notifications each time link is paid and how we dream about our future.',
            img: chooseUs2,
            icon: faBell
        },
        {
            id: 1,
            title: 'Home Delivery',
            description: 'Keep your system in sync with automated web hooks based notifications each time link is paid and how we dream about our future.',
            img: chooseUs3,
            icon: faTruck
        },
    ]
    return (
        <div className='container mt-5'>
            <h1 className='heading-2'>Why you choose us</h1>
            <p className='w-50'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded</p>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                {
                    chooseUsCard.map(service => <ChooseUsCard
                        key={service.id}
                        service={service}
                    ></ChooseUsCard>)
                }
            </div>
        </div>
    );
};

export default WhyYouChooseUs;