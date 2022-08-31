import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux/slices/authSlice";
import "./Login.scss";

const Login = ({
  loggedInValue,
  setLoggedInValue,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const URL = "http://localhost:3309/vendors/login/";

  const onChange = (e) => {
    setLoggedInValue({ ...loggedInValue, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL, loggedInValue);
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          className="login__info"
          type="text"
          id="email"
          value={loggedInValue.email}
          placeholder="@ email"
          onChange={(e) => onChange(e)}
          required
        />

        <input
          className="login__info"
          type="password"
          id="password"
          value={loggedInValue.password}
          placeholder="password"
          onChange={(e) => onChange(e)}
          required
        />
        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>

        <button
          onClick={() => navigate("./")}
          type="submit"
          className="login__sign_in"
        >
          {" "}
          SIGN IN
        </button>
        <hr />
        <button className="login__sign_in">
        </button>
      </form>
    </div>
  );
};

export default Login;
