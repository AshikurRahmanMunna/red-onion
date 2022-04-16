import React from "react";
import breakfast1 from '../../../images/breakfast/breakfast1.png';
import breakfast2 from '../../../images/breakfast/breakfast2.png';
import breakfast3 from '../../../images/breakfast/breakfast3.png';
import breakfast4 from '../../../images/breakfast/breakfast4.png';
import breakfast5 from '../../../images/breakfast/breakfast5.png';
import breakfast6 from '../../../images/breakfast/breakfast6.png';
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './BreakFast.css';
const breakFast = [
  {
    id: 12122021001,
    name: 'Bagel and cream cheese',
    des: 'How we dream about our future',
    price: 6.99,
    img: breakfast1
  },
  {
    id: 12122021002,
    name: 'Breakfast sandwich',
    des: 'How we dream about our future',
    price: 9.99,
    img: breakfast2
  },
  {
    id: 12122021003,
    name: 'Baked chicken',
    des: 'How we dream about our future',
    price: 10.99,
    img: breakfast3
  },
  {
    id: 12122021004,
    name: 'Eggs Benedict',
    des: 'How we dream about our future',
    price: 8.99,
    img: breakfast4
  },
  {
    id: 12122021005,
    name: 'Toast Croissant Fried Egg',
    des: 'How we dream about our future',
    price: 19.99,
    img: breakfast5
  },
  {
    id: 12122021006,
    name: 'Full breakfast fried egg toast brunch',
    des: 'How we dream about our future',
    price: 3.99,
    img: breakfast6
  }
]

const BreakFast = () => {
  return (
    <div className="container breakfasts row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        breakFast.map(breakFast => <FoodCard
          key={breakFast.id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default BreakFast;
