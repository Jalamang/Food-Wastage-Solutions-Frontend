import React from "react";
import { useState, useEffect } from "react";
import SearchComponent from "../searchComponent/SearchComponent";
import VendorCard from "../vendorCard/VendorCard";
import "./Vendors.scss";
const Vendors = ({ placeholder }) => {
  const URL = "http://localhost:3309/vendors/";
  // const API = process.env.REACT_APP_API_URL;

  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // functions
  useEffect(() => {
    // reach out to the backend
    fetch(URL)
      .then((response) => response.json()) // get our vendors
      .then((data) => {
        setVendors(data.vendors); // update our vendors hook with the new data
      });
  }, []); // empty array means run on mount

  let filteredVendors = !searchTerm ? vendors: vendors.filter((vendor) => {
    const vendorName = vendor.name.toLowerCase();
    const searchTermLowerCase = searchTerm.toLowerCase();
    return vendorName.includes(searchTermLowerCase);
  });


  return (
    <>
      <SearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="search by name"
      />
      <div className="vendors">
        {filteredVendors.map((vendor) => {
          return <VendorCard key={vendor.vendor_id} vendor={vendor} />;
        })}
      </div>
      {filteredVendors.length === 0 &&
        <div className="vendors__noResults">
          No vendor with this name{" "}
        </div>
    }
    </>
  );
};

export default Vendors;
