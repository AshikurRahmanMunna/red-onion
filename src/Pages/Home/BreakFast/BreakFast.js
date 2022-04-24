import React from "react";
import useFoodsCategory from "../../../hooks/useFoodsCategory";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './BreakFast.css';


const BreakFast = () => {
  const [breakfasts, setbreakfasts] = useFoodsCategory('breakfast');
  return (
    <div className="container breakfasts row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        breakfasts.map(breakFast => <FoodCard
          key={breakFast._id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default BreakFast;
