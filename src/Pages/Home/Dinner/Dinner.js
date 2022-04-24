import React from "react";
import useFoodsCategory from "../../../hooks/useFoodsCategory";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './Dinner.css';

const Dinner = () => {
  const [dinners, setDinners] = useFoodsCategory('dinner');
  return (
    <div className="container dinners row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        dinners.map(breakFast => <FoodCard
          key={breakFast._id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default Dinner;