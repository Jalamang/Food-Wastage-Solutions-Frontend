import React, { useState } from "react";
import "./Navbar.scss";
import { IoIosHome, IoIosPersonAdd } from "react-icons/io";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "./Drawer";
import { navBarElements } from "./Links";

const Navbar = () => {

  const { isAuth } = useSelector((state) => state.auth);
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const midViewHeight = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar  sx={{ color: "white", background: "#1C495C" }}>
      <Toolbar>
        {midViewHeight ? (
          <>
            <Link to="/">
            
              <Typography sx={{ fontSize: "1rem", paddingLeft: "50%" }}>
                <IoIosHome />
              </Typography>{" "}
            </Link>
            <Drawer />
          </>
        ) : (
          <>
            <Tabs
              textColor="inherit"
              value={tab}
              onChange={(e, value) => setTab(value)}
              indicatorColor="secondary"
              sx={{ marginLeft: "5rem" }}
            >
              {navBarElements.map(({ title, path }, index) => (
                <Tab key={index} label={title} to={path} />
              ))}
            </Tabs>

            {isAuth ? (
              <div>
                <Button
                  variant="text"
                  sx={{
                    marginLeft: "40rem",
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  <Link
                    to="/merchandises/new"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Add Product{" "}
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="text"
                  sx={{ marginLeft: "auto", color: "black" }}
                >
                  <Link
                    to="/vendors/new"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Register{" "}
                  </Link>
                </Button>
                <Button
                  variant="text"
                  sx={{ marginLeft: "2rem", color: "white" }}
                >
                  <Link
                    to="/vendors/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    LOGIN{" "}
                  </Link>
                </Button>
              </>
            )}
          </>
        )}
        <AddShoppingCartIcon sx={{ marginLeft: "3rem", marginRight: "7rem" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
