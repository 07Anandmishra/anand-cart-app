import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../redux/action";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function Cart() {
  const [price, setPrice] = useState(0);
  const state = useSelector((state) => state.reducer);
  console.log(state);
  const dispatch = useDispatch();

  const Deletitem = (product) => {
    alert("are you sure you  want to delete");
    dispatch(removeCart(product));
  };

  const Increement = (product) => {
    console.log(product);
    dispatch(addCart(product));
  };

  const Decrement = (product) => {
    dispatch(removeCart(product));
  };

  useEffect(() => {
    const total = state.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);
    setPrice(total);
  }, [state]);


  return (
    <div className="card mb-5" style={{ marginTop: "100px" }}>
      {state.length > 0 ? (
        <div className="row">
          <div className="col-md-8 col-12 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {state.length} items
                </div>
              </div>
            </div>
            {state.map((ele) => {
              return (
                <div className="row border-top border-bottom" key={ele.id}>
                  <div className="row main align-items-center ">
                    <div className="col-md-3 col-6 ">
                      <img
                        className="img-fluid"
                        src={ele.image}
                        alt="prod_img"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="row text-muted pb-2">{ele.category}</div>
                      <div className="row">{ele.title.slice(0, 20)}</div>
                    </div>
                    <div className="col-md-3 col-6  quantity">
                      <a>
                        <RemoveIcon onClick={() => Decrement(ele)} />
                      </a>
                      <span>{ele.qty}</span>
                      <a>
                        <AddIcon onClick={() => Increement(ele)} />
                      </a>
                    </div>
                    <div className="col-md-3 col-6 delete ">
                      &euro; {ele.qty * ele.price.toFixed(2)}
                      <span className="close" style={{ cursor: "pointer" }}>
                        {" "}
                        <DeleteForeverIcon
                          className="delete"
                          onClick={() => Deletitem(ele)}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="back-to-shop ">
              <NavLink to="/">
                <ArrowBackIcon />
                <span className="text-muted ">Back to shop</span>
              </NavLink>
            </div>
          </div>

          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col" style={{ pendingLeft: "0px" }}>
                ITEMS {state.length}
              </div>
              <div className="col text-right">&euro; {price.toFixed(2)}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard-Delivery- &euro;5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)" }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">
                &euro; {(price + 5).toFixed(2)}
              </div>
            </div>
            <button className="checout_btn">CHECKOUT</button>
          </div>
        </div>
      ) : (
        <div className="my-5 text-center ">
          <RemoveShoppingCartIcon className="emptyc-carticon" />
          <h5 className="my-4">Your Cart is empty</h5>
          <NavLink className="btn btn-primary mt" to="/">
            Shop Now
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
