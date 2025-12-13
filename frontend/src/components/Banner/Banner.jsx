// import React from "react";
// import bg1 from "../../assets/cake1.jpg";
// import bg2 from "../../assets/cake2.jpg";
// import bg3 from "../../assets/cake3.jpg";
// import bg4 from "../../assets/cake4.jpg";
// import "./Banner.css";

// function Banner() {
//   return (
//     <div className="sec1">
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">

//           <div className="carousel-item active">
//             <img src={bg1} className="d-block w-100 bg1" alt="Slide 1" />
//           </div>

//           <div className="carousel-item">
//             <img src={bg2} className="d-block w-100 bg1" alt="Slide 2" />
//           </div>

//           <div className="carousel-item">
//             <img src={bg3} className="d-block w-100 bg1" alt="Slide 3" />
//           </div>

//           <div className="carousel-item">
//             <img src={bg4} className="d-block w-100 bg1" alt="Slide 4" />
//           </div>

//         </div>

//         {/* TEXT OVERLAY */}
//         <div className="banner-text">
//           <h1>Fresh & Delicious Cakes</h1>
//           <p>Made with love. Baked for every celebration.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;
import React from "react";
import bg1 from "../../assets/cake1.jpg";
import bg2 from "../../assets/cake2.jpg";
import bg3 from "../../assets/cake3.jpg";
import bg4 from "../../assets/cake4.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="css-banner">
      <div className="slides">
        <img src={bg1} alt="Cake 1" />
        <img src={bg2} alt="Cake 2" />
        <img src={bg3} alt="Cake 3" />
        <img src={bg4} alt="Cake 4" />
      </div>

      {/* Text Overlay */}
      <div className="banner-text">
        <h1>Fresh & Delicious Cakes</h1>
        <p>Made with love. Baked for every celebration.</p>
      </div>
    </div>
  );
}

export default Banner;
