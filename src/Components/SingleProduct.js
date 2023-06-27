import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = useDispatch();

  const { id } = useParams();

  const getSingleproduct = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setSingleProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleproduct();
  }, []);

  const ADD = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div>
      <div className="container mydiv mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6">
                  <div className="images p-3">
                    <div className="text-center p-4">
                      {" "}
                      <img
                        id="main-image"
                        src={singleProduct.image}
                        width="250"
                        height="250"
                        alt="product_img"
                      />
                    </div>
                    <div className="thumbnail text-center">
                     
                      <img
                        src={singleProduct.image}
                        width="70"
                        alt="product_img"
                      />{" "}
                      <img
                        src={singleProduct.image}
                        width="70"
                        alt="product_img"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        {" "}
                        <NavLink to="/">
                          {" "}
                          <ArrowBackIcon /> <span className="ml-1">Back</span>
                        </NavLink>{" "}
                      </div>{" "}
                      <i className="fa fa-shopping-cart text-muted"></i>
                    </div>
                    <div className="mt-4 mb-3">
                      {" "}
                      <span className="text-uppercase text-muted brand">
                        {singleProduct.category}
                      </span>
                      <h5 className="text-uppercase">{singleProduct.title}</h5>
                      <div className="price d-flex flex-row align-items-center">
                        {" "}
                        <span className="act-price">
                          ${singleProduct.price}
                        </span>
                        <div className="ml-2">
                         
                          <small className="dis-price">$59</small>
                          <span>40% OFF</span>
                        </div>
                      </div>
                    </div>
                    <p className="about">{singleProduct.description}</p>
                    <div className="available_line d-flex flex-row justify-content-between">
                      <div className="available_title">
                        Available: <span>6</span>
                      </div>
                      <div className="sold_stars ml-auto">
                       
                        Rating
                        {singleProduct.rating && singleProduct.rating.rate}
                      
                  
                        <StarIcon />
                      </div>
                    </div>
                    <div className="sizes mt-3">
                      <h6 className="text-uppercase">Size</h6>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" value="S" />{" "}
                        <span>S</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" value="M" />{" "}
                        <span>M</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" value="L" />{" "}
                        <span>L</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" value="XL" />{" "}
                        <span>XL</span>{" "}
                      </label>{" "}
                      <label className="radio">
                        {" "}
                        <input type="radio" name="size" value="XXL" />{" "}
                        <span>XXL</span>{" "}
                      </label>
                    </div>
                    <div className=" mt-4 align-items-center">
                      {" "}
                      <button
                        className="btn btn-danger text-uppercase mr-2 px-4"
                        onClick={() => ADD(singleProduct)}
                      >
                        Add to cart
                      </button>{" "}
                      <i className="fa fa-heart text-muted"></i>{" "}
                      <i className="fa fa-share-alt text-muted"></i>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
