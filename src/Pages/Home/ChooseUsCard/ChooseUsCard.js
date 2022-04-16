import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ChooseUsCard.css";

const ChooseUsCard = ({ service }) => {
  const { title, description, img, icon } = service;
  const cardIconStyle = {
    borderRadius: "50%",
    color: "white",
    marginTop: "20px",
    marginLeft: "auto",
    display: "block",
    background: "#F91944",
    width: "15px",
    height: "15px",
    padding: "15px",
  };
  const seeMoreIcon = {
    borderRadius: "50%",
    color: "white",
    width: "10px",
    height: "10px",
    padding: "5px",
    background: "#18E270",
    margin: "auto 0",
  };
  return (
    <div className="col mb-5">
      <div className="service-card">
        <img src={img} className="img-fluid" alt={title} />
        <div className="row p-3">
          <div className="col-2 card-icon">
            <FontAwesomeIcon
              icon={icon}
              style={cardIconStyle}
            ></FontAwesomeIcon>
          </div>
          <div className="col-10 mt-3">
            <h5>{title}</h5>
            <p className="text-muted">{description}</p>
            <button className="btn btn-link text-decoration-none">
              See More{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={seeMoreIcon}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUsCard;
