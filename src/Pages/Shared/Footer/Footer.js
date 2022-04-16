import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo2.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-dark footer p-5">
      <div className="row container mx-auto">
        <div className="col-12 col-lg-6">
            <img src={logo} style={{height: '50px'}} alt="footer logo" />
        </div>
        <div className="col-12 col-lg-3">
            <Link to="/about">About Online Food</Link>
            <Link to="/blog">Read our blog</Link>
            <Link to="/signup">Sign up to deliver</Link>
            <Link to="/add">About Online Food</Link>
        </div>
        <div className="col-12 col-lg-3">
            <Link to="/help">Get Help</Link>
            <Link to="/faq">Read FAQs</Link>
            <Link to="/cities">View All Cities</Link>
            <Link to="/restaurants">Restaurants near me</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
