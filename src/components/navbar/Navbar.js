import React from "react";
import "./Navbar.scss";
import { IoIosHome, IoIosPersonAdd } from "react-icons/io";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { GiFruitBowl } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      <AppBar sx={{ background: "#022323" }}>
        <Toolbar>
          <AddShoppingCartIcon />
          <Tabs  textColor="inherit">
            <Tab label="Product"> </Tab>
            <Tab label="Product"> </Tab>
            <Tab label="Product"> </Tab>
            <Tab label="Product"> </Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>

  );
};

export default Navbar;
