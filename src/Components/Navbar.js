import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Header = () => {
  const state = useSelector((state) => state.reducer);
  console.log(state);

  return (
    <>
      <Navbar className="nav-bar fixed-top " collapseOnSelect expand="lg">
        <Container>
          {/* <NavLink className='nav-link' to="/"><img src={logimg} alt='logo' /></NavLink> */}
          <NavLink to="/">
            <Navbar.Brand className="nav-logo">
              <span>E-</span>commerce
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-content">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link  cart-link" to="/cart">
                <ShoppingBagIcon className="cart-bageicon" />
                <span>{state.length}</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
