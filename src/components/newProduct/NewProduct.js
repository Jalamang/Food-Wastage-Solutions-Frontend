import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NewProduct.scss"
axios.defaults.withCredentials = true

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const URL = "http://localhost:3309/merchandises/";
  // const URL = "https://food-waste-solution-backend.herokuapp.com/merchandises/";
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const merchandises = await axios.get(URL + id);
        setProduct(...merchandises.data.rows);
      }
    };
    fetchData();
  }, []);
 
  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setProduct({ ...product, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    id !== undefined
      ? axios.put(URL + id, product).then(() => navigate("/merchandises/"+ id))
      : axios.post(URL, product).then(() => navigate("/merchandises"));
  };
 
  return (
    <form onSubmit={handleSubmit} className="product">
      <label htmlFor="category"> </label>
      < select
      type="text"
        id="category"
        value={product.category || ""}
        onChange={handleTextChange}
      > 
      <option defaultChecked> Choose a Category</option>
      <option value="Fish"> Fish Dept</option>
      <option value="Meat"> abattoir - Meat Dept</option>
      <option value="Vegetable"> Produce Dept</option>
      </select>

      <label htmlFor="location"> Location</label>
      <input
        className="product__fieldInfo"
        type="text"
        id="location"
        value={product.location || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="address"> Address</label>
      <input
        className="product__fieldInfo"
        type="text"
        id="address"
        value={product.address || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="image"> Photo</label>
      <input
        className="product__fieldInfo"
        type="url"
        id="image"
        value={product.image || ""}
        onChange={handleTextChange}
        required
      />
      <label htmlFor="image"> Vendor Identification #</label>
      <input
        className="product__fieldInfo"
        type="text"
        id="owner_id"
        value={product.owner_id || ""}
        onChange={handleTextChange}
        required
      />
      <button className="productForm__submit"  type="submit" style={{'display': id ? 'none' : 'block'}}> Create New Product</button>
      <button className="productForm__submit"  type="submit" style={{'display': id ? 'block' : 'none'}}> Update</button>
    </form>
  );
};

export default NewProduct;
