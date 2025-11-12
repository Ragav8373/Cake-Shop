import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutimg from '../../assets/aboutimg.jpg';
import './Aboutpage.css';

function Aboutpage() {
  return (
    <div className="abt1">
      <Container fluid>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className="abouttxt">
              <h1 className="abth1">Aila Cakes & Cafe</h1>
              <p className="abtp1">Where every slice is divine</p>
              <p className="abtp2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                quaerat eveniet nesciunt possimus, vero facilis quam repudiandae
                reprehenderit minima provident? Laudantium nisi, consequatur dolores
                quas laborum repellendus velit ab. Veritatis placeat, sunt saepe
                illum qui sit ipsum vel possimus autem recusandae hic. Dolor, harum.
                Reiciendis at earum error sunt voluptatibus?
              </p>
              <button className="abtbtn">Read More</button>
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
