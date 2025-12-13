// import { Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Badge from "react-bootstrap/Badge";
// import { useCart } from "../../context/CartContext";

// // Icons
// import {
//   FaBlenderPhone,
//   FaInstagram,
//   FaWhatsapp,
//   FaSearch,
// } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { MdEmail, MdLocationOn } from "react-icons/md";

// // Logo
// import logo from "../../assets/logo1.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const navigate = useNavigate();

//   return (
//     <header className="w-100 p-0 container-fluid">
//       {/* Top Header */}
//       <div className="top-header d-flex justify-content-between align-items-center py-2 px-md-5 px-3">
//         <p className="m-0 header-text">
//           <FaBlenderPhone className="me-1" /> +91 9876543210
//         </p>
//         <p className="m-0 header-text">
//           <MdEmail className="me-1" /> info@ailacakes.com
//         </p>
//         <p className="m-0 header-text">
//           <MdLocationOn className="me-1" /> Madurai, Tamil Nadu
//         </p>

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

//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-md px-md-5 px-3">
//         <div className="navbar-container d-flex align-items-center w-100">
//           {/* Logo */}
//           <Link to="/" className="navbar-brand">
//             <img src={logo} alt="Logo" className="logo" />
//           </Link>

//           {/* Center Nav Links (Desktop) */}
//           <ul className="navbar-nav navbar-nav-center d-none d-md-flex gap-3">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
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

//           {/* Right: Search + Cart + Hamburger */}
//           <div className="d-flex align-items-center gap-2 ms-auto">
//             <div className="search-wrapper desktop d-none d-md-block">
//               <input
//                 type="text"
//                 className="form-control search-input"
//                 placeholder="Search cakes..."
//               />
//               <button className="search-btn">
//                 <FaSearch />
//               </button>
//             </div>

//             <div
//               className="position-relative cursor-pointer"
//               onClick={() => navigate("/cart")}
//             >
//               <IoCartOutline className="carticon" />
//               {cartItems.length > 0 && (
//                 <Badge bg="danger" className="cart-badge">
//                   {cartItems.length}
//                 </Badge>
//               )}
//             </div>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarContent"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile collapse */}
//         <div className="collapse navbar-collapse" id="navbarContent">
//           <div className="search-wrapper d-md-none mt-2 mb-2">
//             <input
//               type="text"
//               className="form-control search-input"
//               placeholder="Search cakes..."
//             />
//             <button className="search-btn">
//               <FaSearch />
//             </button>
//           </div>

//           <ul className="navbar-nav navbar-nav-center d-md-none flex-column gap-2">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
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
//                 {/* <Row>
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
//                 </Row> */}

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
import {
  FaBlenderPhone,
  FaInstagram,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";

// Logo
import logo from "../../assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <header className="w-100 p-0 container-fluid navbarc">
      {/* Top Header */}
      <div className="top-header d-flex justify-content-between align-items-center py-2 px-md-5 px-3 ">
        <p className="m-0 header-text">
          <FaBlenderPhone className="me-1" /> +91 9876543210
        </p>
        <p className="m-0 header-text">
          <MdEmail className="me-1" /> info@ailacakes.com
        </p>
        <p className="m-0 header-text">
          <MdLocationOn className="me-1" /> Madurai, Tamil Nadu
        </p>

        <div className="d-flex gap-3">
          <a href="https://instagram.com" target="_blank" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-md px-md-5 px-3 navbarc">
        <div className="navbar-container d-flex align-items-center w-100 ">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar-nav navbar-nav-center d-none d-md-flex gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Cakes Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle bg-transparent border-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cakes
              </button>

              <ul className="dropdown-menu mega-menu p-3">
                <Row>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/wedding-cakes">Wedding Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/anniversary-cakes">Anniversary Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/celebration">Celebration Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/baby-shower">Baby Shower Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/holy-communion">Holy Communion Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/smash-cakes">Smash Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/half-birthday-cakes">Half Birthday Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/first-birthday-cakes">1st Birthday Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-boys">Cake for Boys</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-girls">Cake for Girls</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/theme-cakes">Theme Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/heart-shape">Heart Shape Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/drip-naked-cakes">Drip & Naked Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/cheese-cakes">Cheese Cakes</Link></Col>
                  <Col sm={12}><Link className="dropdown-item" to="/cakes/photo-cakes">Photo Cakes</Link></Col>
                </Row>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
          </ul>

          {/* Right */}
          
          <div className="d-flex align-items-center gap-2 ms-auto">
            <div className="search-wrapper desktop d-none d-md-block">
              <input className="form-control search-input" placeholder="Search cakes..." />
              <button className="search-btn"><FaSearch /></button>
            </div>

            <div className="position-relative cursor-pointer" onClick={() => navigate("/cart")}>
              <IoCartOutline className="carticon" />
              {cartItems.length > 0 && (
                <Badge bg="danger" className="cart-badge">{cartItems.length}</Badge>
              )}
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="collapse navbar-collapse" id="navbarContent">
            <div className="search-wrapper d-md-none mt-2 mb-2">
             <input type="text"
              className="form-control search-input"
              placeholder="Search cakes..."
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>
          <ul className="navbar-nav d-md-none flex-column gap-2">
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>

  <li className="nav-item dropdown">
    <button
      className="nav-link dropdown-toggle bg-transparent border-0"
      data-bs-toggle="dropdown"
    >
      Cakes
    </button>

    <ul className="dropdown-menu mega-menu p-3">
      <Row>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/wedding-cakes">Wedding Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/anniversary-cakes">Anniversary Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/celebration">Celebration Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/baby-shower">Baby Shower Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/holy-communion">Holy Communion Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/smash-cakes">Smash Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/half-birthday-cakes">Half Birthday Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/first-birthday-cakes">1st Birthday Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-boys">Cake for Boys</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/cake-for-girls">Cake for Girls</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/theme-cakes">Theme Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/heart-shape">Heart Shape Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/drip-naked-cakes">Drip & Naked Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/cheese-cakes">Cheese Cakes</Link></Col>
        <Col sm={12}><Link className="dropdown-item" to="/cakes/photo-cakes">Photo Cakes</Link></Col>
      </Row>
    </ul>
  </li>

  {/* ✅ ADD THESE 3 ITEMS */}
  <li className="nav-item">
    <Link className="nav-link" to="/about">About Us</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contact Us</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to="/gallery">Gallery</Link>
  </li>
</ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
