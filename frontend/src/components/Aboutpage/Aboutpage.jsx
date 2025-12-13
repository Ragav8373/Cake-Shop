import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ Correct import
import aboutimg from '../../assets/aboutimg.jpg';
import './Aboutpage.css';

function Aboutpage() {
  return (
    <div className="abt1">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="abouttxt p-3">
              <h1 className="abth1">Aila Cakes & Cafe</h1>
              <p className="abtp1">Where every slice is divine</p>
              <p className="abtp2">
                Aila Cakes & Café is a premium cake, pastry, and bakery shop in Erode.
                We specialize in offering delicious bakery products, cakes, and pastries
                in fabulous flavors and tastes — all at unbeatable price ranges.
              </p>
              
              {/* ✅ Link navigates properly now */}
              <Link to="/about" className="abtbtn py-2" >
                Read More
              </Link>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <img src={aboutimg} alt="About Aila Cakes" className="aboutimg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
