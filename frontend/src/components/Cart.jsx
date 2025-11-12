
import { Container, Row, Col } from "react-bootstrap";
import { Fragment, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function AllCategories() {
  const [products, setProducts] = useState([]);

  const categories = [
    "wedding cakes",
    "anniversary cakes",
    "celebration",
    "baby shower",
    "holy communion",
    "smash cakes",
    "half birthday cakes",
    "1st birthday cakes",
    "cake for boys",
    "cake for girls",
    "theme cakes",
    "heart shape",
    "drip and naked cakes",
    "cheese cakes",
    "photo cakes",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Helper: get one product per category
  const getProductsByCategory = (category) => {
    return products
      .filter(
        (product) =>
          product.category &&
          product.category.toLowerCase() === category.toLowerCase()
      )
      .slice(0, 1); // only one product per category
  };

  // Group categories into chunks of 4
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    groupedCategories.push(categories.slice(i, i + 4));
  }

  return (
    
    <Fragment>
      <h2 className="luxury-title text-center">
        Our Wide Range of <br />
        Elegant and Luxury Cakes
      </h2>

      <Container className="py-5 ">
        {groupedCategories.map((group, rowIndex) => (
          <Row key={rowIndex} className="g-5 mb-5">
            {group.map((category) => {
              const filteredProducts = getProductsByCategory(category);
              if (filteredProducts.length === 0) return null;

              return (
                <Col key={category} xs={12} sm={6} md={3}>
                  <div className="text-center">
                    <h4 className="category-title text-capitalize mb-3">
                      {category}
                    </h4>
                    {filteredProducts.map((product) => (
                      <div key={product._id} className="product-card">
                        <img
                          src={`http://localhost:5000/uploads/${product.image}`}
                          alt={product.name}
                          className="product-image"
                        />
                        <div className="product-info">
                          <Link to={`/product/${product._id}`}>
                            <button className="cart-btn mt-2">
                              <FaShoppingCart className="me-1" /> Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
              );
            })}
          </Row>
        ))}
      </Container>
    </Fragment>
  );
}

export default AllCategories;
