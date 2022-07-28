import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import SearchComponent from "../searchComponent/SearchComponent";
import "./Merchandises.scss";
const Merchandises = () => {
  const URL = "http://localhost:3309/merchandises/";
  // const API = process.env.REACT_APP_API_URL;

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // functions
  useEffect(() => {
    // reach out to the backend
    fetch(URL)
      .then((response) => response.json()) // get our vendors
      .then((data) => {
        console.log(data);
        setProducts(data.merchandises); // update our vendors hook with the new data
      });
  }, []); // empty array means run on mount

  let filteredProducts = products;
  if (searchTerm) {
    filteredProducts = products.filter((product) => {
      const productCategory = product.category.toLowerCase();
      const searchTermToLowerCase = searchTerm.toLowerCase();
      return productCategory.includes(searchTermToLowerCase);
    });
  }
  return (
    <>
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="searchTerm">e.g Meat, Vegetable, Fish</div>

      <div className="row">
        <div className="location-title ">
          <h4>Find merchandises by location</h4>
          <h6>Browse open merchandises in different locations</h6>
        </div>
        <div className=" merchandises-row">
          <button className="tile-filter">All locations</button>

          <button className="tile-filter">Brikama</button>

          <button className="tile-filter">Farafenni</button>

          <button className="tile-filter">Basse</button>

          <button className="tile-filter">Soma &amp; Pakalinding</button>

          <button className="tile-filter">Badibou</button>
        </div>
      </div>

      <div className="merchandises">
        {filteredProducts.map((product) => {
          return <ProductCard product={product} key={product.merchan_id} />;
        })}
      </div>
      {filteredProducts.length === 0 && (
        <div className="merchandises__noResults">
          No search result for this category{" "}
        </div>
      )}
    </>
  );
};

export default Merchandises;
