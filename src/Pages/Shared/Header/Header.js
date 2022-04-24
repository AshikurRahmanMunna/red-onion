import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Navbar sticky="top" bg="white" className="navbar" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{ height: "40px" }} src={logo} alt="Red Onion Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/products/add">
                  Add Product
                </Nav.Link>
                <Nav.Link as={Link} to="/products/delete">
                  Delete Product
                </Nav.Link>
                <Nav.Link onClick={() => signOut(auth)}>Log Out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
