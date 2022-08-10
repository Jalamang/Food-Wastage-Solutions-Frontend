import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import "./ProductDetail.scss";
import DialogBox from "../../components/dialogBox/DialogBox";

const ProductDetail = () => {
  let params = useParams();
  const { id } = params;

  const location = useLocation();
  const [product, setProduct] = useState({});
  const URL = `http://localhost:3309/merchandises/${id}`;
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.product) {
      setProduct(location.state?.product);
    } else {
      const singleProduct = URL;

      fetch(singleProduct)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProduct(...data.rows);
        });
    }
  }, []);

  // const handleDelete = async () => {
  //   await axios.delete(URL).then(() => navigate("/merchandises"));
  // };

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteUserLoading, setDeleteUserLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const showDeleteUserDialogue = (e) => {
    setShowDeleteDialog(true);
  };

  const handleDelete = () => {
    setDeleteUserLoading(true);

    const URL = `http://localhost:3309/merchandises/${id}`;

    fetch(URL, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        setDeleteUserLoading(false);
      })
      .then(() => navigate("/merchandises"))
      .catch((err) => {
        setDeleteUserLoading(false);
        setShowSnackbar(true);
      });
  };

  return (
    <>
      <Snackbar
        open={showSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={1500}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert severity="error">
          An error occurred while deleting — try again later.
        </Alert>
      </Snackbar>

      {Object.keys(product).length > 0 && (
        <div className="productDetail">
          <div className="productDetail__image">
            <img src={product.image} alt={product.category}></img>
          </div>
          <div className="vl"></div>
          <div className="productDetail__info">
            <div>
              {product.category[0].toUpperCase() + product.category.slice(1)}
            </div>
            <div>
              {product.address[0].toUpperCase() + product.address.slice(1)}
            </div>
          </div>
        </div>
      )}
      {!deleteUserLoading && (
        <button onClick={(e) => showDeleteUserDialogue(e)} size="1.8em">
          Del.
        </button>
      )}
      <DialogBox
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        handleDelete={handleDelete}
      />
      <hr />
    </>
  );
};

export default ProductDetail;
