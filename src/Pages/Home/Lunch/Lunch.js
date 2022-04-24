import React from "react";
import useFoodsCategory from "../../../hooks/useFoodsCategory";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import './Lunch.css';


const Lunch = () => {
  const [lunches, setLunches] = useFoodsCategory('lunch');
  return (
    <div className="container lunches row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-3">
      {
        lunches.map(breakFast => <FoodCard
          key={breakFast._id}
          food={breakFast}
        ></FoodCard>)
      }
    </div>
  );
};

export default Lunch;