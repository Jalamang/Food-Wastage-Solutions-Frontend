import React from "react";
import "./VendorCard.scss";
const VendorCard = ({ vendor }) => {
  const { name, business_type, address, profile } = vendor;
  console.log(vendor);

  return (
    <div className="vendorCard">
      <div className="vendorCard__image">{name}</div>
      <div>
        <div>{name}</div>
        <div>{business_type}</div>
        <div>{profile}</div>
      </div>
    </div>
  );
};

export default VendorCard;
