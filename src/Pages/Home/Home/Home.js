import React from "react";
import "./Home.css";

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
    </div>
  );
};

export default Home;
