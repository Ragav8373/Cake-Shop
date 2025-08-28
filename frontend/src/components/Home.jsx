import React from "react";
import bg1 from "../img2/New folder/logo5.jpg";
import bg2 from "../assets/slide4.jpg";
import { Row,Col, Container } from 'react-bootstrap';
import aboutimg from "../assets/aboutimg.jpg";
import Cart from "./Cart";


const Home = () => {
  return (
    <div>
      {/* Section 1 - Bootstrap Carousel */}
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

      <Cart/>
      {/* about */}
      <div className="abt1">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
          <div className="abouttxt">
          <h1 className="abth1">Aila Cakes & Cafe</h1>
          <p className="abtp1">Where, every Slice is Divine</p>
          <p className="abtp2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quaerat eveniet nesciunt possimus, vero facilis quam repudiandae reprehenderit minima provident? Laudantium nisi, consequatur dolores quas laborum repellendus velit ab. Veritatis placeat, sunt saepe illum qui sit ipsum vel possimus autem recusandae hic. Dolor, harum. Reiciendis at earum error sunt voluptatibus?</p>
          <button className="abtbtn">Read More</button>
          </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
          <img src={aboutimg} alt=""  className="aboutimg"/>
          </Col>
        </Row>
      </Container>
    </div>
    
    </div>
  );
};

export default Home;
