// import React, { useState, useRef, useEffect } from "react";
// import { Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Badge from "react-bootstrap/Badge";
// import { useCart } from "../../context/CartContext";

// // Icons
// import { FaBlenderPhone } from "react-icons/fa";
// import { CiSearch } from "react-icons/ci";
// import { IoCartOutline } from "react-icons/io5";

// // Logo
// import logo from "../../assets/logo1.png";

// import "./Navbar.css";

// const Navbar = () => {
//   const { cartItems, removeFromCart } = useCart();
//   const navigate = useNavigate();
//   const [cartOpen, setCartOpen] = useState(false);
//   const dropdownRef = useRef();

//   const orderData = {
//     items: cartItems,
//     totalQuantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
//   };

//   // Close cart dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setCartOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="navbar-container container-fluid mb-4">
//       {/* ===== Top Bar: Logo + Contact + Cart ===== */}
//       <div className="row align-items-center py-3 px-md-5">
//         {/* Logo */}
//         <div className="col-md-3 text-center text-md-start">
//           <Link to="/">
//             <img src={logo} alt="Logo" className="logo" />
//           </Link>
//         </div>

//         {/* ===== Contact + Search + Cart ===== */}
// <div className="col-md-9">
//   <div className="d-flex justify-content-end align-items-center gap-3 flex-wrap">
//     {/* Phone */}
//     <p className="mb-1 phone">
//       <FaBlenderPhone className="me-1" /> +91 68745 25469
//       <span className="timing">(08 AM - 11 PM)</span>
//     </p>

//     {/* Search Bar */}
//     <div className="search-wrapper d-flex align-items-center">
//       <input
//         type="text"
//         className="searchbar"
//         placeholder="Search cakes..."
//       />
//       <CiSearch className="searchicon" />
//     </div>

//     {/* Cart */}
//     <div className="position-relative" ref={dropdownRef}>
//       <div
//         className="d-flex align-items-center cursor-pointer"
//         onClick={() => setCartOpen((prev) => !prev)}
//       >
//         <IoCartOutline className="carticon" />
//         {cartItems.length > 0 && (
//           <Badge bg="danger" className="cart-badge">
//             {cartItems.length}
//           </Badge>
//         )}
//       </div>      {/* Cart Dropdown */}
//               {cartOpen && (
//                 <div className="cart-dropdown shadow rounded">
//                   {cartItems.length === 0 ? (
//                     <p className="text-center mb-0">Your cart is empty.</p>
//                   ) : (
//                     <>
//                       <ul className="list-unstyled mb-3">
//                         {[...cartItems].reverse().map((item, i) => (
//                           <li
//                             key={i}
//                             className="d-flex align-items-center mb-2 border-bottom pb-2"
//                           >
//                             <img
//                               src={`http://localhost:5000/uploads/${item.image}`}
//                               alt={item.productName}
//                               className="cart-item-img"
//                             />
//                             <div className="ms-2 flex-grow-1">
//                               <div>
//                                 <strong>{item.productName}</strong>
//                               </div>
//                               <div className="cart-item-info">
//                                 Flavour: {item.flavour} | Qty: {item.quantity}
//                               </div>
//                             </div>
//                             <button
//                               className="btn btn-sm btn-outline-danger"
//                               onClick={() => removeFromCart(item.productId)}
//                             >
//                               &times;
//                             </button>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="d-flex justify-content-between">
//                         <button
//                           className="btn btn-primary btn-sm"
//                           onClick={() => {
//                             setCartOpen(false);
//                             navigate("/cart");
//                           }}
//                         >
//                           View Cart
//                         </button>
//                         <button
//                           className="btn btn-success btn-sm"
//                           onClick={() => {
//                             setCartOpen(false);
//                             navigate("/checkout", { state: orderData });
//                           }}
//                         >
//                           Checkout
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//           <hr className="hr1" />
//         </div>
//       </div>

//       {/* ===== Navbar Links ===== */}
//       <nav className="navbar navbar-expand-md px-3 px-md-5">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarContent"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
//             <ul className="navbar-nav gap-3">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>

//               {/* Cakes Dropdown */}
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                 >
//                   Cakes
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Row>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/wedding-cakes">Wedding Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/anniversary-cakes">Anniversary Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/celebration">Celebration</Link></Col>
//                     </Row>
//                     <Row>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/baby-shower">Baby Shower</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/holy-communion">Holy Communion</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/smash-cakes">Smash Cakes</Link></Col>
//                     </Row>
//                     <Row>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/half-birthday-cakes">Half Birthday Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/first-birthday-cakes">1st Birthday Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-boys">Cake for Boys</Link></Col>
//                     </Row>
//                     <Row>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-girls">Cake for Girls</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/theme-cakes">Theme Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/heart-shape">Heart Shape</Link></Col>
//                     </Row>
//                     <Row>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/drip-naked-cakes">Drip & Naked Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/cheese-cakes">Cheese Cakes</Link></Col>
//                       <Col sm={12}><Link className="dropdown-item" to="/cakes/photo-cakes">Photo Cakes</Link></Col>
//                     </Row>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">About Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">Contact Us</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/gallery">Gallery</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// import React, { useState, useRef, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "../../context/CartContext";

// Icons
import { FaBlenderPhone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

// Logo
import logo from "../../assets/logo1.png";

import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="navbar-container container-fluid mb-4">
      {/* ===== Top Bar: Logo + Contact + Cart ===== */}
      <div className="row align-items-center py-3 px-md-5">
        {/* Logo */}
        <div className="col-md-3 text-center text-md-start">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Contact + Search + Cart */}
        <div className="col-md-9">
          <div className="d-flex justify-content-end align-items-center gap-3 flex-wrap">
            {/* Phone */}
            <p className="mb-1 phone">
              <FaBlenderPhone className="me-1" /> +91 68745 25469
              <span className="timing">(08 AM - 11 PM)</span>
            </p>

            {/* Search Bar */}
            <div className="search-wrapper d-flex align-items-center">
              <input
                type="text"
                className="searchbar"
                placeholder="Search cakes..."
              />
              <CiSearch className="searchicon" />
            </div>

            {/* Cart Icon - Directly navigates to View Cart */}
            <div className="position-relative">
              <div
                className="d-flex align-items-center cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <IoCartOutline className="carticon" />
                {cartItems.length > 0 && (
                  <Badge bg="danger" className="cart-badge">
                    {cartItems.length}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <hr className="hr1" />
        </div>
      </div>

      {/* ===== Navbar Links ===== */}
      <nav className="navbar navbar-expand-md px-3 px-md-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarContent"
          >
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* Cakes Dropdown */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Cakes
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Row>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/wedding-cakes"
                        >
                          Wedding Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/anniversary-cakes"
                        >
                          Anniversary Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/celebration">
                          Celebration
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/baby-shower">
                          Baby Shower
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/holy-communion"
                        >
                          Holy Communion
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/smash-cakes">
                          Smash Cakes
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/half-birthday-cakes"
                        >
                          Half Birthday Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/first-birthday-cakes"
                        >
                          1st Birthday Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/cake-for-boys"
                        >
                          Cake for Boys
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/cake-for-girls"
                        >
                          Cake for Girls
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/theme-cakes">
                          Theme Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/heart-shape">
                          Heart Shape
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/drip-naked-cakes"
                        >
                          Drip & Naked Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link
                          className="dropdown-item"
                          to="/cakes/cheese-cakes"
                        >
                          Cheese Cakes
                        </Link>
                      </Col>
                      <Col sm={12}>
                        <Link className="dropdown-item" to="/cakes/photo-cakes">
                          Photo Cakes
                        </Link>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
