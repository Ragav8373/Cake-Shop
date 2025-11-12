import React from "react";
import bg1 from "../../img2/New folder/logo5.jpg";
import bg2 from "../../assets/slide4.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="sec1">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg1} className="d-block w-100 bg1" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100 bg1" alt="Slide 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
