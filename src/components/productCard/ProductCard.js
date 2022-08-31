import React , {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import StarRating from "./StarRating";
import "./ProductCard.scss";
import {fetchVendors} from "../../redux/slices/fetchedDataslice"

const ProductCard = ({ product, loggedInValue }) => {
const dispatch = useDispatch()
  const { merchan_id, address, location, category, owner_id, image } = product;
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const  {vendors}  = useSelector((state) => state.vendor);


useEffect(() => {
 dispatch(fetchVendors())
}, [vendors])

let isLoggedInUserId = "";
for(let user of vendors){
  if(user.email === loggedInValue.email){
    isLoggedInUserId = user.vendor_id === owner_id
  }
}




//   vendors.find((el) => {
//     if (el.email === loggedInValue.email) {
//       isLoggedInUserId =  el.vendor_id 
//     }
    
//   });
// };




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
