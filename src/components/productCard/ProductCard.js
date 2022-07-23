import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { merchan_id, address, category, owner_id, image } = product;
  const navigate = useNavigate();

  return (
    <div className="productCard ">
      <Link to={`/merchandises/${merchan_id}`} state={{ product: product }}>
        <div className="productCard__image">
          <img src={image} alt={category}></img>
        </div>
      </Link>

      <div className="productCard__info">
        <div>{category[0].toUpperCase() + category.slice(1)}</div>
        <div>{address}</div>
        <br />
        <br />
        <button
          onClick={() => navigate("/merchandises/" + merchan_id + "/edit")}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
