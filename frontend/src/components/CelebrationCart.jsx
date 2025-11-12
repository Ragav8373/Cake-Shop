import { Container, Row, Col } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CelebrationCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products/category/celebration')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching celebration cakes:', err));
  }, []);

  return (
    <Fragment>
      <h2 className="luxury-title">Celebration Cakes</h2>
      <Container className="py-5">
        <Row className="g-4">
          {products.map(p => (
            <Col key={p._id} xs={12} sm={6} md={3}>
              <div className="product-card">
                <img src={`http://localhost:5000/uploads/${p.image}`} alt={p.name} className="product-image" />
                <div className="product-info">
                  <Link to={`/product/${p._id}`}>
                    <button className="cart-btn">
                      <FaShoppingCart className="me-1" /> Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default CelebrationCart;
