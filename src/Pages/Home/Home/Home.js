import React from "react";
import BreakFast from "../BreakFast/BreakFast";
import Foods from "../../Foods/Foods";
import "./Home.css";
import WhyYouChooseUs from "../WhyYouChooseUs/WhyYouChooseUs";

const Home = () => {
  return (
    <div>
      <div className="search-area">
        <form className="search-form">
          <h1 className="heading">Best Food Waiting For Your Belly</h1>
          <div className="d-flex align-items-center justify-content-center">
            <div className="search">
              <input type="text" placeholder="Search Food Items" />
              <span>
                <button>Search</button>
              </span>
            </div>
          </div>
        </form>
      </div>
      <Foods></Foods>
      <WhyYouChooseUs></WhyYouChooseUs>
    </div>
  );
};

export default Home;
