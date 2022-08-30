import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import SearchComponent from "../searchComponent/SearchComponent";
import Vendors from "../Vendors/Vendors";
import "./Merchandises.scss";

const Merchandises = ({ loggedInValue, setLoggedInValue, loginData }) => {
  const URL = "http://localhost:3309/merchandises/";

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.merchandises);
      });
  }, []);

  let locations = [
    "All locs",
    "Brikama",
    "Farafenni",
    "Soma",
    "Badibou",
  ];

  function findLocation(e) {
    setLocation(e.target.value);
  }

  const displayLocations = locations.map((region, index) => (
    <div className="main__location-filter">
      <input
        type="radio"
        value={region}
        checked={location === region}
        onChange={findLocation}
        key={index.toString()}
      />
      {" "}
      {region}
    </div>
  ));

  let filteredProducts = products;

  if (location === "All locs") {
    filteredProducts = products;
  } else if (location) {
    filteredProducts = products.filter((product) => {
      const productCategory = product.location.toLowerCase();
      const locationToLowerCase = location.toLowerCase();
      return productCategory.includes(locationToLowerCase);
    });
  }

  if (searchTerm) {
    filteredProducts = products.filter((product) => {
      const productCategory = product.category.toLowerCase();
      const searchTermToLowerCase = searchTerm.toLowerCase();
      return productCategory.includes(searchTermToLowerCase);
    });
  }

  return (
    <div className="main">
      <div className="main__location-title">
        <div className="location-title-message">
          <h4 style={{ marginLeft: "2rem" }}>Find merchandise by location</h4>
          <h6 style={{ marginLeft: "2rem", color: "#FFF4A3" }}>
            <strong>
              You must be signed in to view details of a merchandise
            </strong>
          </h6>
        </div>
        <div>
          <SearchComponent
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
      </div>

      <div className="main__location-product">
        <div className="main__location">
          {displayLocations} 
        </div>

        <div className="main__merchandises">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.merchan_id}
                loggedInValue={loggedInValue}
                setLoggedInValue={setLoggedInValue}
                loginData={loginData}
              />
            );
          })}
          {filteredProducts.length === 0 && (
            <div
              className="merchandises__noResults"
              style={{
                width: "35rem",
                marginLeft: "25rem",
                color: "red",
                alignSelf: "center",
              }}
            >
              No search result for this category{" "}
            </div>
          )}
        </div>
        <div className="vendor-side">
          <Vendors />
        </div>
      </div>
    </div>
  );
};

export default Merchandises;
