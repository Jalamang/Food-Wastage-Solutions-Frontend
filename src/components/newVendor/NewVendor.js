import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewVendor.scss";
axios.defaults.withCredentials = true

const NewVendor = () => {
  const [vendor, setVendor] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = "http://localhost:3309/vendors/";
  // const URL = 'https://food-waste-solution-backend.herokuapp.com/vendors/'
  
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const vendorData = await axios.get(URL + id);
        setVendor(...vendorData.data.users);
      }
    };
    fetchData();
  }, [id]);

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setVendor({ ...vendor, [id]: value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       id !== undefined
      ?
       axios
          .put(URL + id, vendor)
          .then(() => navigate("/vendors"))
      : 
    await axios.post(URL +"/create", vendor).then(() => navigate(`/vendors`))
    
    setSuccess()
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
   
  };

const pattern = {
    phone: /^([1-9]{1})([0-9]{2})-([1-9]{1})([0-9]{2})-([0-9]{4})$/, // eslint-disable-next-line
    name:/^([a-z\d\s]){2,20}$/gi,
    password: /^[\w@-]{6,20}$/,
    email:/^([a-z\d\.\-]+)@([a-z\d-]+)\.([a-z]{2,5})(\.[a-z{2,5}])?$/
  }

  function validate(field, regex){
        if (regex.test(field.value)) {
          field.setAttribute('style', "border:1px; border-style:solid; border-color:#59981A");
        } else {
          field.setAttribute('style', "border:1px; border-style:solid; border-color:#FF0000");
        }
  }
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("keyup", (e)=>{
    validate(e.target, pattern[e.target.attributes.id.value])
  })
})

  
  return (

    <form className="vendorForm" onSubmit={handleSubmit}>
      <label htmlFor="name"> Name </label>
      <input
        className="vendorForm__fieldInfo"
        type="text"
        id="name"
        value={vendor.name || ""}
        onChange={handleTextChange}
        required
      />

      <label htmlFor="business_type"> Business Type </label>
      <select 
      className="vendorForm__fieldInfo"
      id="business_type" 
      value={vendor.business_type} 
      onChange={handleTextChange}
      required 
      >
        <option>--</option>
        <option value="Fish">Fish Dept</option>
        <option value="Vegetable">Vegetable Dept</option>
        <option value="Meat">abattoir - Meat Dept</option>
      </select>
      <label htmlFor="address"> Address </label>
      <input
        className="vendorForm__fieldInfo"
        type="text"
        id="address"
        value={vendor.address || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="phone"> Phone </label>
      <input
        className="vendorForm__fieldInfo"
        type="text"
        id="phone"
        value={vendor.phone || ""}
        onChange={handleTextChange}
        required
      />
      <div style={{ color: 'red', margin: '10px 0' }}>{Error}</div>
      <label htmlFor="photo"> Photo </label>
      <input
        className="vendorForm__fieldInfo"
        type="url"
        id="photo"
        value={vendor.photo || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="profile"> Profile </label>
      <textarea
        className="vendorForm__fieldInfo"
        type="text"
        id="profile"
        value={vendor.profile || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="email"> Email </label>
      <input
        className="vendorForm__fieldInfo"
        type="text"
        id="email"
        value={vendor.email || ""}
        onChange={handleTextChange}
        required
      />

      <label htmlFor="password"> Password </label>
      <input
        className="vendorForm__fieldInfo"
        type="password"
        id="password"
        value={vendor.password || ""}
        onChange={handleTextChange}
        required
        autoComplete="off"
      />
      <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
      <button className="vendorForm__submit" style={{ "display": id  ? 'none' : 'block'}} type="submit">
        {" "}
        Create New Vendor
      </button>
      <button className="vendorForm__submit" style={{ "display": id  ? 'block': 'none' }} type="submit">
        {" "}
        Update
      </button>
    </form>
   
  );
};

export default NewVendor;
