import React from "react";
import { Link } from "react-router";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="px-[5vw] flex justify-between items-center text-primery-green h-[10vh]">
      <Link to="/">
        <img alt="logo" src={logo} width={150} />
      </Link>
      <div className="gap-40 hidden lg:flex">
        <Link to="/">Home</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Register Now</Link>{" "}
      </div>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navbar;
