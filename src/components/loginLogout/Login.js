import axios from "axios";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {authenticateUser} from  "../../redux/slices/authSlice"
import "./Login.scss";
axios.defaults.withCredentials = true
const Login = () => {
  const navigate = useNavigate()
  const URL = "http://localhost:3309/vendors/login/";
  // const URL = 'https://food-waste-solution-backend.herokuapp.com/vendors/login';
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const onChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value })
  }
  const dispatch = useDispatch()
const handleSubmit = async(e) => {
  e.preventDefault()
  try {
     await axios.post(URL, values)
     dispatch(authenticateUser())
     localStorage.setItem("isAuth", "true")
// console.log("login success")
  } catch (error) {
    console.log(error.response.data.errors[0].msg)
    setError(error.response.data.errors[0].msg)
  }
 
}  
  return (
    <div className="login" >
    <form onSubmit={handleSubmit}>
        <input
          className="login__info"
          type="text"
          id="email"
          value={values.email}
          placeholder="@ email"
          onChange={(e) => onChange(e)}
          required
        />

      <input
        className="login__info"
        type="password"
        id="password"
        value={values.password}
        placeholder="password"
        onChange={(e) => onChange(e)}
        required
      />
      <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
    <button onClick={()=> navigate("./")} type='submit' className="login__sign_in"> SIGN IN</button>
    <hr/>
    <button  className="login__sign_in"> 
    {/* <FontAwesomeIcon icon={''...''}/> */}
    </button>
    </form>
    
   
  

    </div>
  );
};

export default Login;
