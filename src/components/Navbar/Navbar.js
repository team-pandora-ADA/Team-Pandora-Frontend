import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-title">
          <img src={logo} alt="rentease" />
        </Link>
        <button className="navbar-toggle" onClick={handleClick}></button>
        <div
          //  className={`side-menu ${isOpen ? "open" : ""}`}
          className="navbar-desktop-links"
        >
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
