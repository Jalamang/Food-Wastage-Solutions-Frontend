import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StarRating from "./StarRating";
import "./ProductCard.scss";

const ProductCard = ({ product, loggedInValue, setLoggedInValue }) => {

  const { merchan_id, address, location, category, owner_id, image } = product;
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="productCard ">
      <div className="productCard__image">
        <Link to={`/merchandises/${merchan_id}`} state={{ product: product }}>
          <img src={image} alt={category}></img>
        </Link>
        <br />
        <br />
        <StarRating />
      </div>

      <div className="productCard__info">
        <div>{category[0].toUpperCase() + category.slice(1)}</div>
        <div>{location}</div>
        <br />

        {!!isAuth && (
          <button
            onClick={() => navigate("/merchandises/" + merchan_id + "/edit")}
          >
            Edit
          </button>
        )}
        
      </div>
    </div>
  );
};

export default ProductCard;
