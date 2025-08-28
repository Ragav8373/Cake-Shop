import { Container, Row, Col } from 'react-bootstrap';
import { Fragment, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function WeddingCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <Fragment>
      <h2 className="luxury-title">
       Wedding Cakes
      </h2>

      <Container className='py-5'>
        <Row className='g-4'>
          {products.slice(104,130).map(product => (
            <Col key={product._id} xs={12} sm={6} md={3}>
              <div className="product-card">
                <img
                  src={`http://localhost:5000/uploads/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <Link to={`/product/${product._id}`}>
                    <button className="cart-btn">
                      <FaShoppingCart className='me-1' />Buy Now
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

export default WeddingCart;
