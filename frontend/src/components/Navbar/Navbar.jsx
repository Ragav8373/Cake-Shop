// // import { Row, Col } from "react-bootstrap";
// // import { Link, useNavigate } from "react-router-dom";
// // import Badge from "react-bootstrap/Badge";
// // import { useCart } from "../../context/CartContext";

// // // Icons
// // import { FaBlenderPhone } from "react-icons/fa";
// // import { IoCartOutline } from "react-icons/io5";

// // // Logo
// // import logo from "../../assets/logo1.png";

// // import "./Navbar.css";

// // const Navbar = () => {
// //   const { cartItems } = useCart();
// //   const navigate = useNavigate();

// //   return (
// //     <header className="container-fluid navbar-container px-md-5 py-3">
// //       <div className="navheader"></div>
// //       <nav className="navbar navbar-expand-md">
// //         {/* Logo */}
// //         <Link to="/" className="navbar-brand">
// //           <img src={logo} alt="Logo" className="logo" />
// //         </Link>

// //         {/* Mobile Toggle */}
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarContent"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>

// //         {/* ===== Single Line Menu ===== */}
// //         <div
// //           className="collapse navbar-collapse justify-content-center"
// //           id="navbarContent"
// //         >
// //           <ul className="navbar-nav gap-3 align-items-center">
// //             <li className="nav-item">
// //               <Link className="nav-link" to="/">
// //                 Home
// //               </Link>
// //             </li>

// //             {/* Cakes Dropdown */}
// //             <li className="nav-item dropdown">
// //               <Link
// //                 className="nav-link dropdown-toggle"
// //                 to="#"
// //                 role="button"
// //                 data-bs-toggle="dropdown"
// //               >
// //                 Cakes
// //               </Link>

// //               <ul className="dropdown-menu mega-menu p-3">
// //                 <Row>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/wedding-cakes">
// //                       Wedding Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link
// //                       className="dropdown-item"
// //                       to="/cakes/anniversary-cakes"
// //                     >
// //                       Anniversary Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/celebration">
// //                       Celebration
// //                     </Link>
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/baby-shower">
// //                       Baby Shower
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/holy-communion">
// //                       Holy Communion
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/smash-cakes">
// //                       Smash Cakes
// //                     </Link>
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col sm={12}>
// //                     <Link
// //                       className="dropdown-item"
// //                       to="/cakes/half-birthday-cakes"
// //                     >
// //                       Half Birthday Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link
// //                       className="dropdown-item"
// //                       to="/cakes/first-birthday-cakes"
// //                     >
// //                       1st Birthday Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/cake-for-boys">
// //                       Cake for Boys
// //                     </Link>
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/cake-for-girls">
// //                       Cake for Girls
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/theme-cakes">
// //                       Theme Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/heart-shape">
// //                       Heart Shape
// //                     </Link>
// //                   </Col>
// //                 </Row>
// //                 <Row>
// //                   <Col sm={12}>
// //                     <Link
// //                       className="dropdown-item"
// //                       to="/cakes/drip-naked-cakes"
// //                     >
// //                       Drip & Naked Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/cheese-cakes">
// //                       Cheese Cakes
// //                     </Link>
// //                   </Col>
// //                   <Col sm={12}>
// //                     <Link className="dropdown-item" to="/cakes/photo-cakes">
// //                       Photo Cakes
// //                     </Link>
// //                   </Col>
// //                 </Row>
// //               </ul>
// //             </li>

// //             <li className="nav-item">
// //               <Link className="nav-link" to="/about">
// //                 About Us
// //               </Link>
// //             </li>

// //             <li className="nav-item">
// //               <Link className="nav-link" to="/contact">
// //                 Contact Us
// //               </Link>
// //             </li>

// //             <li className="nav-item">
// //               <Link className="nav-link" to="/gallery">
// //                 Gallery
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Right Side: Phone + Cart */}
// //         <div className="d-flex align-items-center gap-3">
// //           <p className="mb-0 phone">
// //             <FaBlenderPhone className="me-1" /> +91 68745 25469
// //           </p>

// //           <div
// //             className="position-relative cursor-pointer"
// //             onClick={() => navigate("/cart")}
// //           >
// //             <IoCartOutline className="carticon" />
// //             {cartItems.length > 0 && (
// //               <Badge bg="danger" className="cart-badge">
// //                 {cartItems.length}
// //               </Badge>
// //             )}
// //           </div>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // };

// // export default Navbar;

// import { Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Badge from "react-bootstrap/Badge";
// import { useCart } from "../../context/CartContext";

// // Icons
// import { FaBlenderPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { MdEmail, MdLocationOn } from "react-icons/md";

// // Logo
// import logo from "../../assets/logo1.png";

// import "./Navbar.css";

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   return (
//     <header className="container-fluid  p-0">
//       {/* ========== TOP SMALL HEADER ========== */}
//       <div className="top-header d-flex justify-content-between align-items-center py-2">
//         <div className="d-flex gap-4 align-items-center">
//           <p className="m-0 header-text">
//             <MdEmail className="me-1" /> info@yourbakery.com
//           </p>

//           <p className="m-0 header-text">
//             <FaBlenderPhone className="me-1" /> +91 98765 43210
//           </p>

//           <p className="m-0 header-text">
//             <MdLocationOn className="me-1" /> Chennai, Tamil Nadu
//           </p>
//         </div>

//         <div className="d-flex gap-3">
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             className="social-icon"
//           >
//             <FaInstagram />
//           </a>

//           <a
//             href="https://wa.me/919876543210"
//             target="_blank"
//             className="social-icon"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>

//       {/* ========== MAIN NAVIGATION ========== */}
//       <nav className="navbar navbar-expand-md py-3">
//         {/* Logo */}
//         <Link to="/" className="navbar-brand">
//           <img src={logo} alt="Logo" className="logo" />
//         </Link>

//         {/* Mobile Toggle */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* ===== Single Line Menu ===== */}
//         <div
//           className="collapse navbar-collapse justify-content-center"
//           id="navbarContent"
//         >
//           <ul className="navbar-nav gap-3 align-items-center">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>

//             {/* Cakes Dropdown */}
//             <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//               >
//                 Cakes
//               </Link>

//               <ul className="dropdown-menu mega-menu p-3">
//                 <Row>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/wedding-cakes">
//                       Wedding Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link
//                       className="dropdown-item"
//                       to="/cakes/anniversary-cakes"
//                     >
//                       Anniversary Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/celebration">
//                       Celebration
//                     </Link>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/baby-shower">
//                       Baby Shower
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/holy-communion">
//                       Holy Communion
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/smash-cakes">
//                       Smash Cakes
//                     </Link>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col sm={12}>
//                     <Link
//                       className="dropdown-item"
//                       to="/cakes/half-birthday-cakes"
//                     >
//                       Half Birthday Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link
//                       className="dropdown-item"
//                       to="/cakes/first-birthday-cakes"
//                     >
//                       1st Birthday Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/cake-for-boys">
//                       Cake for Boys
//                     </Link>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/cake-for-girls">
//                       Cake for Girls
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/theme-cakes">
//                       Theme Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/heart-shape">
//                       Heart Shape
//                     </Link>
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Col sm={12}>
//                     <Link
//                       className="dropdown-item"
//                       to="/cakes/drip-naked-cakes"
//                     >
//                       Drip & Naked Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/cheese-cakes">
//                       Cheese Cakes
//                     </Link>
//                   </Col>
//                   <Col sm={12}>
//                     <Link className="dropdown-item" to="/cakes/photo-cakes">
//                       Photo Cakes
//                     </Link>
//                   </Col>
//                 </Row>
//               </ul>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About Us
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact Us
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery">
//                 Gallery
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side: Phone + Cart */}
//         <div className="d-flex align-items-center gap-3">
//           <p className="mb-0 phone">
//             <FaBlenderPhone className="me-1" /> +91 68745 25469
//           </p>

//           <div
//             className="position-relative cursor-pointer"
//             onClick={() => navigate("/cart")}
//           >
//             <IoCartOutline className="carticon" />
//             {cartItems.length > 0 && (
//               <Badge bg="danger" className="cart-badge">
//                 {cartItems.length}
//               </Badge>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useCart } from "../../context/CartContext";

// Icons
import { FaBlenderPhone, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

// Logo
import logo from "../../assets/logo1.png";

import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="w-100 p-0">
      {/* ========== TOP SMALL HEADER (Full Width) ========== */}
      <div className="top-header d-flex justify-content-between align-items-center py-2  px-md-5 px-3">
        {/* Left Info */}
        <div className="d-flex gap-4 align-items-center">
          <p className="m-0 header-text">
            <MdEmail className="me-1" /> info@ailacakes.com
          </p>

          <p className="m-0 header-text">
            <FaBlenderPhone className="me-1" /> +91 9876543210
          </p>

          <p className="m-0 header-text">
            <MdLocationOn className="me-1" /> Madurai, Tamil Nadu
          </p>
        </div>

        {/* Right Social Icons */}
        <div className="d-flex gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            className="social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* ========== MAIN NAVBAR ========== */}
      <nav className="navbar navbar-expand-md  px-md-5 px-3">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav gap-3 align-items-center">
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

              <ul className="dropdown-menu mega-menu p-3">
                <Row>
                  <Col sm={12}>
                    <Link className="dropdown-item" to="/cakes/wedding-cakes">
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
                    <Link className="dropdown-item" to="/cakes/holy-communion">
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
                    <Link className="dropdown-item" to="/cakes/cake-for-boys">
                      Cake for Boys
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12}>
                    <Link className="dropdown-item" to="/cakes/cake-for-girls">
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
                    <Link className="dropdown-item" to="/cakes/cheese-cakes">
                      Cheese Cakes
                    </Link>
                  </Col>
                  <Col sm={12}>
                    <Link className="dropdown-item" to="/cakes/photo-cakes">
                      Photo Cakes
                    </Link>
                  </Col>
                </Row>
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

        {/* Right Side: Phone + Cart */}
        <div className="d-flex align-items-center gap-3">
          <div className="search-wrapper position-relative">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search cakes..."
              aria-label="Search"
            />
            <button className="search-btn" type="submit">
              <FaSearch />
            </button>
          </div>

          <div
            className="position-relative cursor-pointer"
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
      </nav>
    </header>
  );
};

export default Navbar;
