import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {

  const navigate = useNavigate();

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
        {/* <Link to="/">
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
        </Link> */}

        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>

      {/* <button onClick={()=> navigate('/about')}>Get started</button> */}
      <button onClick={()=> navigate('/contact', {replace : true})}>Get started</button>
    </div>
  );
};

export default Navbar;
