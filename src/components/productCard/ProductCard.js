import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss"
const ProductCard = ({ product }) => {
  const { merchan_id, address, category, owner_id, image } = product;
  return (
    <div className="productCard">
      <Link to={`/merchandises/${merchan_id}`} state={{product:product}}>
      <div className="productCard__image">
        <img src={image} alt={category}></img>
      </div>
      </Link>
      <div className='productCard__info'>
        <div>{category[0].toUpperCase() + category.slice(1)}</div>
        <div>{address}</div>
      </div>
      
    </div>
  );
};

export default ProductCard;
