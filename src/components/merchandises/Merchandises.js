import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import SearchComponent from "../searchComponent/SearchComponent";
import Vendors from "../Vendors/Vendors";
import "./Merchandises.scss";

const Merchandises = ({
  loggedInValue,
  setLoggedInValue,
  loginData
  
}) => {
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

  let checkboxes = document.querySelectorAll("input[type='radio']");

  function findLocation() {
    for (let checkbox of checkboxes) {
      checkbox.addEventListener("change", (e) => {
        setLocation(e.target.attributes.id.value);
      });
    }
  }

  let filteredProducts = products;

  if (location === "All locations") {
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
          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="All locations"
                value={location}
                onChange={findLocation}
                name="radio_btn"
                checked
              />
              {"  "}All locs
            </label>
          </div>

          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="Brikama"
                value={location}
                onChange={findLocation}
                name="radio_btn"
              />
              {"  "}Brikama
            </label>
          </div>
          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="Farafenni"
                value={location}
                onChange={findLocation}
                name="radio_btn"
              />
              {"  "}Farafenni
            </label>
          </div>
          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="Basse"
                value={location}
                onChange={findLocation}
                name="radio_btn"
              />
              {"  "}Basse
            </label>
          </div>
          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="Soma &amp; Pakal"
                value={location}
                onChange={findLocation}
                name="radio_btn"
              />
              {"  "} Soma &amp; Pakal
            </label>
          </div>
          <div className="main__location-filter">
            <label>
              <input
                type="radio"
                id="Badibou"
                value={location}
                onChange={findLocation}
                name="radio_btn"
              />
              {"  "} Badibou
            </label>
          </div>
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
