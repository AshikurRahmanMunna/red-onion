import React from "react";
import dinner1 from '../../../images/dinner/dinner1.png';
import dinner2 from '../../../images/dinner/dinner2.png';
import dinner3 from '../../../images/dinner/dinner3.png';
import dinner4 from '../../../images/dinner/dinner4.png';
import dinner5 from '../../../images/dinner/dinner5.png';
import dinner6 from '../../../images/dinner/dinner6.png';
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './Dinner.css';
const dinner = [
  {
    id: 12122021001,
    name: 'Salmon With Grapefruit and lentil salad',
    des: 'How we dream about our future',
    price: 6.99,
    img: dinner1
  },
  {
    id: 12122021002,
    name: 'Lemony salmon piccata',
    des: 'How we dream about our future',
    price: 9.99,
    img: dinner2
  },
  {
    id: 12122021003,
    name: 'Pork Tenderloin with quino pilaf',
    des: 'How we dream about our future',
    price: 10.99,
    img: dinner3
  },
  {
    id: 12122021004,
    name: 'French fries with cheese',
    des: 'How we dream about our future',
    price: 8.99,
    img: dinner4
  },
  {
    id: 12122021005,
    name: 'Garlic butter Baked Salmon',
    des: 'How we dream about our future',
    price: 19.99,
    img: dinner5
  },
  {
    id: 12122021006,
    name: 'Baked Chicken',
    des: 'How we dream about our future',
    price: 3.99,
    img: dinner6
  }
]

const Dinner = () => {
  return (
    <div className="container breakfasts row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        dinner.map(breakFast => <FoodCard
          key={breakFast.id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default Dinner;