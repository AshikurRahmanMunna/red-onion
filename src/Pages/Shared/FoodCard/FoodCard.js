import React from 'react';
import { Card } from 'react-bootstrap';
import './FoodCard.css';

const FoodCard = ({food}) => {
    const {name, img, price, des} = food;
    return (
        <div className="col my-3">
        <Card className='food-card mx-auto'>
          <img className='food-card-img' alt={name} src={img} />
          <div>
            <h6 className='food-card-title'>{name}</h6>
            <div className='food-card-body'>
              <p className='text-muted food-card-description'>{des}</p>
              <h2 className='food-card-price'><small>{price}</small></h2>
            </div>
          </div>
        </Card>
      </div>
    );
};

export default FoodCard;