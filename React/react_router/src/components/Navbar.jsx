import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA"
        alt=""
        width="{130px}"
      />
      <ul>
        {/* <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li> */}
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button>Get started</button>
    </div>
  );
};

export default Navbar;
