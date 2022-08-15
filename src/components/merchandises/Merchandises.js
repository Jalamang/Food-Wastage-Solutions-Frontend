import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";
import SearchComponent from "../searchComponent/SearchComponent";
import "./Merchandises.scss";
const Merchandises = () => {
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

  function findLocation() {
    let buttons = document.querySelectorAll("button.loc-filter");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        setLocation(buttons[i].firstChild.nodeValue);
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
    <>
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="searchTerm">e.g Meat, Vegetable, Fish</div>

      <div className="row">
        <div className="location-title">
          <h4>Find merchandise by location</h4>
          <h6 style={{ color: "#FFF4A3" }}>
            <strong>
              You must be signed in to view details of a merchandise
            </strong>
          </h6>
        </div>
        <div className=" merchandises-row">
          <button className="loc-filter">All locations</button>

          <button className="loc-filter" onClick={findLocation}>
            Brikama
          </button>

          <button className="loc-filter" onClick={findLocation}>
            Farafenni
          </button>

          <button className="loc-filter" onClick={findLocation}>
            Basse
          </button>

          <button className="loc-filter" onClick={findLocation}>
            Soma &amp; Pakalinding
          </button>

          <button className="loc-filter" onClick={findLocation}>
            Badibou
          </button>
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
