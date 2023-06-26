import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slide from "./Slide";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterButton, setFilterButton] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const ADD = (product) => {
    toast.success("Product added successfully !", {
      position: "top-right",
      autoClose: 1000,
    });
    dispatch(addCart(product));
  };

  const getAllProducts = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setFilterButton(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const selectedPage = (selectpage) => {
    if (
      selectpage >= 1 &&
      selectpage <= products.length / 5 &&
      selectpage !== page
    )
      setPage(selectpage);
  };

  const Loading = () => {
    return <h6 className="text-center">Product Loading....</h6>;
  };

  const filterData = (catItem) => {
    const newdata = filterButton.filter((ele) => {
      return ele.category === catItem;
    });
    console.log(newdata);
    setProducts(newdata);
  };

  // const selectedPage=(selectpage)=>{
  //     if(selectpage >=1 && selectpage <= products.length/6 && selectpage!==page)
  //     setPage(selectpage)
  //   }

  return (
    <>
      <Slide />
      <div className="container ">
        <div className="row ">
          <h2 className="text-center product-text">Products</h2>
          <div className="col-md-2">
            <div className="py-3">
              <input
                type="text"
                placeholder="Search by name..."
                className="inputbox"
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h5 className="font-weight-bold my-4">Categories</h5>
              <ul className="list-group">
                <li
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"
                  onClick={() => filterData("men's clothing")}
                >
                  {" "}
                  Men <span className="badge badge-primary text-dark">
                    322
                  </span>{" "}
                </li>
                <li
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"
                  onClick={() => filterData("jewelery")}
                >
                  {" "}
                  Jewelery{" "}
                  <span className="badge badge-primary text-dark">
                    112
                  </span>{" "}
                </li>
                <li
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"
                  onClick={() => filterData("electronics")}
                >
                  {" "}
                  Electronics{" "}
                  <span className="badge badge-primary text-dark">32</span>{" "}
                </li>
                <li
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center category"
                  onClick={() => filterData("women's clothing")}
                >
                  {" "}
                  Women{" "}
                  <span className="badge badge-primary text-dark">48</span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row">
              {loading ? (
                <Loading />
              ) : (
                products
                  .slice(page * 5 - 5, page * 5)
                  .filter((items) => {
                    if (search === "") {
                      return products;
                    } else if (
                      items.title
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase())
                    ) {
                      return items;
                    }
                  })
                  .map((ele) => {
                    return (
                      <div className="col-md-4 mb-5  " key={ele.id}>
                        <div className="bbb_deals">
                          <div className="ribbon ribbon-top-right">
                            <span>
                              <small className="cross">x </small>4
                            </span>
                          </div>
                          <div className="bbb_deals_title">
                            Today's Combo Offer
                          </div>
                          <div className="bbb_deals_slider_container">
                            <div className=" bbb_deals_item">
                              <div className="bbb_deals_image">
                                <NavLink to={`/singleproduct/${ele.id}`}>
                                  <img
                                    src={ele.image}
                                    style={{ height: "250px" }}
                                    alt="product_img"
                                  />
                                </NavLink>
                              </div>
                              <div className="bbb_deals_content">
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-between">
                                  <div className="bbb_deals_item_category">
                                    <Link to="#">{ele.category}</Link>
                                  </div>
                                  <div className="bbb_deals_item_price_a ml-auto">
                                    <strike>₹30,000</strike>
                                  </div>
                                </div>
                                <div className="bbb_deals_info_line d-flex flex-row justify-content-between">
                                  <div className="bbb_deals_item_name">
                                    {ele.title.slice(0, 12)}
                                  </div>
                                  <div className="bbb_deals_item_price ml-auto">
                                    ₹{ele.price}
                                  </div>
                                </div>
                                <div className="available">
                                  {/* <div className="available_line d-flex flex-row justify-content-between">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_stars ml-auto"> Rating  {ele.rating && ele.rating.rate} <StarIcon /></div>
                                </div> */}
                                  <div className="d-flex justify-content-between mt-3">
                                    <button
                                      className="btn btn-primary "
                                      onClick={() => ADD(ele)}
                                    >
                                      Add to Cart
                                    </button>
                                    <ToastContainer />
                                    <NavLink to={`/singleproduct/${ele.id}`}>
                                      <button className="btn btn-warning text-white ">
                                        <PreviewIcon /> View
                                      </button>
                                    </NavLink>
                                  </div>
                                  <div className="available_bar">
                                    <span style={{ width: "17%" }}></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>
        {products.length > 0 && (
          <div className="pagination">
            <span onClick={() => selectedPage(page - 1)}>◀️</span>
            {[...Array(products.length / 5)].map((_, i) => {
              return (
                <span
                  className={page === i + 1 ? "pagination_selected" : ""}
                  onClick={() => selectedPage(i + 1)}
                  key={i}
                >
                  {i + 1}
                </span>
              );
            })}

            <span onClick={() => selectedPage(page + 1)}>▶️</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
