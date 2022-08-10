import React from "react";
import "./Navbar.scss";
import { IoIosHome, IoIosPersonAdd } from "react-icons/io";
import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth)
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark">
      <div className="container">
         <Link to="/" className="navbar-brand w-25">
          {" "}
          <IoIosHome className="navbar__eHome" />
        </Link>
        { isAuth ? (<div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
           {/* <Link to="/vendors/new">
            {" "}
            <div className="navbar__elements">
              <IoIosPersonAdd />{" "}
            </div>
          </Link> */}
          
          <Link to="/merchandises/new">
            {" "}
            <div className="navbar__elements">
              <GiFruitBowl />{" "}
            </div>
            <div/> 
          </Link> 
          </div>
          </div>) :
          (<div>
          <Link to="/vendors/new">
          <div className="navbar__elements">
              <IoIosPersonAdd />{" "}
            </div>
          </Link>
          <Link to="/vendors/login">
            <div className="navbar__elements">Login</div>
          </Link>
      </div>) }
      </div>
    </nav>)
};

export default Navbar;

