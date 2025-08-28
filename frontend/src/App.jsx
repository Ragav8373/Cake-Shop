
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./App.css"; 

import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import RouterPage from "./RouterPage";
import { useCart } from './context/CartContext';
import Badge from 'react-bootstrap/Badge';

// Logo
import logo from "./assets/logo1.png";

// Icons
import { FaBlenderPhone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

import { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const dropdownRef = useRef();
const { cart } = useCart();
  // Move orderData here, after cartItems is available
  const orderData = {
    items: cartItems,
    totalQuantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row align-items-center py-3 px-md-5 ">
        {/* Logo (Single Column) */}
        <div className="col-md-3 text-center text-md-center">
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </div>

        {/* Contact Info & Navigation Section */}
        <div className="col-md-9 mb-0">
          {/* Contact Info & Search Bar */}
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <p className="mb-1 phone">
              <FaBlenderPhone className="me-1" />: +91 68745 25469{" "}
              <span style={{ fontSize: "12px" }}>(08 AM - 11 PM)</span>
            </p>
            <div className="d-flex align-items-center position-relative" ref={dropdownRef}>
              <div
                className="d-flex align-items-center cursor-pointer"
                onClick={() => setCartOpen((prev) => !prev)}
                style={{ userSelect: "none" }}
              >
               
                <IoCartOutline className="carticon" style={{ fontSize: 28 }} />
              <Badge bg="danger" className="badge ms-1">
                {cartItems.length}
              </Badge>
              </div>

              {/* {cartOpen && (
                <div
                  className="cart-dropdown p-3 shadow bg-white rounded"
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: 0,
                    width: "320px",
                    maxHeight: "300px",
                    overflowY: "auto",
                    zIndex: 1050,
                  }}
                >
                  {cartItems.length === 0 ? (
                    <p className="text-center mb-0">Your cart is empty.</p>
                  ) : (
                    <>
                      <ul className="list-unstyled mb-3">
                        {cartItems.map((item, i) => (
                          <li
                            key={i}
                            className="d-flex align-items-center mb-2 border-bottom pb-2"
                          >
                            <img
                              src={`http://localhost:5000/uploads/${item.image}`}
                              alt={item.productName}
                              style={{ width: 50, height: 50, objectFit: "cover", borderRadius: "4px" }}
                            />
                            <div className="ms-2 flex-grow-1">
                              <div><strong>{item.productName}</strong></div>
                              <div style={{ fontSize: 13 }}>
                                Flavour: {item.flavour} | Qty: {item.quantity}
                              </div>
                            </div>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFromCart(item.productId)}
                              aria-label="Remove item"
                            >
                              &times;
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="d-flex justify-content-between">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            setCartOpen(false);
                            navigate("/cart");
                          }}
                        >
                          View Cart
                        </button>
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                              setCartOpen(false);
                              navigate('/checkout', { state: orderData });
                            }}
                          >
                            Checkout
                          </button>

                      </div>
                    </>
                  )}
                </div>
              )} */}


           {cartOpen && (
  <div
    className="cart-dropdown p-3 shadow bg-white rounded"
    style={{
      position: "absolute",
      top: "40px",
      right: 0,
      width: "320px",
      maxHeight: "300px",
      overflowY: "auto",
      zIndex: 1050,
    }}
  >
    {cartItems.length === 0 ? (
      <p className="text-center mb-0">Your cart is empty.</p>
    ) : (
      <>
        <ul className="list-unstyled mb-3">
          {[...cartItems].reverse().map((item, i) => (
            <li
              key={i}
              className="d-flex align-items-center mb-2 border-bottom pb-2"
            >
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.productName}
                style={{
                  width: 50,
                  height: 50,
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <div className="ms-2 flex-grow-1">
                <div><strong>{item.productName}</strong></div>
                <div style={{ fontSize: 13 }}>
                  Flavour: {item.flavour} | Qty: {item.quantity}
                </div>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeFromCart(item.productId)}
                aria-label="Remove item"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => {
              setCartOpen(false);
              navigate("/cart");
            }}
          >
            View Cart
          </button>
          <button
            className="btn btn-success btn-sm"
            onClick={() => {
              setCartOpen(false);
              navigate("/checkout", { state: orderData });
            }}
          >
            Checkout
          </button>
        </div>
      </>
    )}
  </div>
)}


            </div>
          </div>

          <hr className="hr1" />
        </div>
      </div>

      {/* navbar */}
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cakes
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Row>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/wedding-cakes">Wedding Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/anniversary-cakes">Anniversary Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/celebration">Celebration</Link></Col>
                    </Row>
                    <Row>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/baby-shower">Baby Shower</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/holy-communion">Holy Communion</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/smash-cakes">Smash Cakes</Link></Col>
                    </Row>
                    <Row>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/half-birthday-cakes">Half Birthday Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/first-birthday-cakes">1st Birthday Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-boys">Cake for Boys</Link></Col>
                    </Row>
                    <Row>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-girls">Cake for Girls</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/theme-cakes">Theme Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/heart-shape">Heart Shape</Link></Col>
                    </Row>
                    <Row>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/drip-naked-cakes">Drip and Naked cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/cheese-cakes">Cheese Cakes</Link></Col>
                      <Col sm={12}><Link className="dropdown-item" to="/cakes/photo-cakes">Photo Cakes</Link></Col>
                    </Row>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact us</Link>
              </li>
              <li >
                <Link className="nav-link" to="gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        


      <RouterPage />
       <Footer/>
    </div>
  );
}

export default App;



