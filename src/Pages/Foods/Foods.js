import React, { useState } from "react";
import BreakFast from "../Home/BreakFast/BreakFast";
import Dinner from "../Home/Dinner/Dinner";
import Lunch from "../Home/Lunch/Lunch";
import "./Foods.css";

const Foods = () => {
  const [foodToDisplay, setFoodToDisplay] = useState(<BreakFast></BreakFast>);
  const [border, setBorder] = useState('breakfast');
  const setBreakFast = () => {
    setFoodToDisplay(<BreakFast></BreakFast>);
    setBorder('breakfast');
  };
  const setLunch = () => {
    setFoodToDisplay(<Lunch></Lunch>);
    setBorder('lunch');
  };
  const setDinner = () => {
    setFoodToDisplay(<Dinner></Dinner>);
    setBorder('dinner');
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="food-toggler">
          <button className={ border === 'breakfast' ? 'red-border' : '' } onClick={setBreakFast}>Breakfast</button>
          <button className={ border === 'lunch' ? 'red-border' : '' } onClick={setLunch}>Lunch</button>
          <button className={ border === 'dinner' ? 'red-border' : '' } onClick={setDinner}>Dinner</button>
        </div>
      </div>
      {foodToDisplay}
      <button className="btn-custom d-block mx-auto">Checkout Your Food</button>
    </div>
  );
};

export default Foods;
