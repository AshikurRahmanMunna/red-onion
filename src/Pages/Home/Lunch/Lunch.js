import React from "react";
import lunch1 from '../../../images/lunch/lunch1.png';
import lunch2 from '../../../images/lunch/lunch2.png';
import lunch3 from '../../../images/lunch/lunch3.png';
import lunch4 from '../../../images/lunch/lunch4.png';
import lunch5 from '../../../images/lunch/lunch5.png';
import lunch6 from '../../../images/lunch/lunch6.png';
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './Lunch.css';
const lunch = [
  {
    id: 12122021001,
    name: 'Healthy Meal Plan',
    des: 'How we dream about our future',
    price: 6.99,
    img: lunch1
  },
  {
    id: 12122021002,
    name: 'Fried Chicken Bento',
    des: 'How we dream about our future',
    price: 9.99,
    img: lunch2
  },
  {
    id: 12122021003,
    name: 'Tarragon Rubbed Salmon',
    des: 'How we dream about our future',
    price: 10.99,
    img: lunch3
  },
  {
    id: 12122021004,
    name: 'Indian Lunch',
    des: 'How we dream about our future',
    price: 8.99,
    img: lunch4
  },
  {
    id: 12122021005,
    name: 'Beef Steak',
    des: 'How we dream about our future',
    price: 19.99,
    img: lunch5
  },
  {
    id: 12122021006,
    name: 'Honey Soy Glazed Salmon With Peeper',
    des: 'How we dream about our future',
    price: 3.99,
    img: lunch6
  }
]

const Lunch = () => {
  return (
    <div className="container lunch row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        lunch.map(breakFast => <FoodCard
          key={breakFast.id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default Lunch;