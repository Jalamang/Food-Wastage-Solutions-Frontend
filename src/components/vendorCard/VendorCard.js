import React from "react";
import "./VendorCard.scss";
const VendorCard = ({ vendor }) => {
  const { name, business_type, photo, address, profile } = vendor;


  return (
    <div className="vendorCard">
      <div className="vendorCard__image">
        <img src={photo} alt={photo}/>
        </div>
      <div className="vendorCard__info">
        <div className="vendorCard__infoName">{name}</div>
        <div className="vendorCard__infoType">{business_type}</div>
      </div>
    </div>
  );
};

export default VendorCard;
