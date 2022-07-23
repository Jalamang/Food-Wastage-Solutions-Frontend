import React from "react";
import "./VendorCard.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VendorCard = ({ vendor }) => {
  const [showImage, setShowImage] = useState(false);
  const { name, business_type, photo, address, profile, vendor_id } = vendor;
const navigate = useNavigate()
  const toggleImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowImage(!showImage);
}
// console.log(showImage)
  return (
    <div className="vendorCard">
      <Link to={`/vendors/${vendor_id}`} state={{vendor:vendor}}>
      <div className="vendorCard__image" style={{"display": showImage ? "block" : "none"}}>
       <img src={photo} alt={photo} />
        </div></Link>
      <div className="vendorCard__info">
        <div className="vendorCard__infoName">{name}</div>
        <div className="vendorCard__infoType">{business_type}</div>
      </div>
      <div>
     { !showImage && <button className="vendorCard__toggleIcon" onClick={(e) => toggleImage(e)} >Show Photo</button>}
     { showImage && <button className="vendorCard__toggleIcon" onClick={(e) => toggleImage(e)} >Hide Photo</button>}

      </div>
      <button onClick={() => navigate('/vendors/'+ vendor_id +'/edit')}>Edit</button>
    </div>
  );
};

export default VendorCard;
