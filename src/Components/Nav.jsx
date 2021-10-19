import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <img src="" alt="" />
      <div className="pages">
        <ul className="links">
          <li className="link"><Link to = "/">Home</Link></li>
          <li className="link"><Link to = "/media">Media</Link></li>
          <li className="link"><Link to = "/services">Services</Link></li>
          <li className="link"><Link to = "/about">About</Link></li>
          <li className="link"><Link to = "/cart">Price Calculator</Link></li>
        </ul>
      </div>
      <div className="socials">
        <ul className="social-links">
          <li className = "social-icon">Icon</li>
          <li className = "social-icon">Icon</li>
          <li className = "social-icon">Icon</li>
          <li className = "social-icon">Icon</li>
          <li className = "social-icon">Icon</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
