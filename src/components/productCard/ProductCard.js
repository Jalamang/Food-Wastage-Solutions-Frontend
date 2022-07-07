import React from "react";
import "./ProductCard.scss"
const ProductCard = ({ product }) => {
  const { merchan_id, address, category, owner_id, image } = product;
  return (
    <div className="productCard">
      <div className="productCard__image">
        <img src={image} alt={category}></img>
      </div>
      <div className='productCard__info'>
        <div>{category[0].toUpperCase() + category.slice(1)}</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default ProductCard;
