import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutimg from '../../assets/aboutimg.jpg';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <Container fluid>
        <Row>
          {/* Left Side - Text */}
          <Col sm={12} md={6} lg={6}>
            <div className="about-content">
              <h1 className="about-title">Aila Cakes & Café</h1>
              <p className="about-subtitle">Premium Cakes • Pastries • Bakery</p>
              <p className="about-text">
                Aila Cakes & Café is a premium cake, pastry, and bakery shop in Erode.
                We specialize in offering delicious bakery products, cakes, and
                pastries in fabulous flavors and tastes — all at unbeatable price
                ranges.
              </p>
              <p className="about-text">
                We craft customized wedding cakes, anniversary cakes, engagement
                cakes, kids’ birthday cakes, designer cakes, baby shower cakes,
                theme cakes, photo cakes, fondant cakes, cupcakes, celebration
                cakes, bachelor party cakes, and cakes for gifting.
              </p>
              <p className="about-text">
                Our goal is to serve the most creative and mouth-watering cakes
                that make every celebration extra special. Pick a design you love,
                choose your favorite flavors, and relax while your dream cake
                arrives fresh at your doorstep on your chosen date and time.
              </p>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col sm={12} md={6} lg={6}>
            <div className="about-image-wrapper">
              <img
                src={aboutimg}
                alt="About Aila Cakes & Café"
                className="about-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
