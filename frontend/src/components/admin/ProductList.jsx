import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        fetchProducts();
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p._id} className="product-card">
          <div className="product-img-wrap">
            <img
              src={`http://localhost:5000/uploads/${p.image}`}
              alt={p.name}
            />
            <div className="product-actions">
              <button
                className="edit-btn"
                onClick={() => navigate(`/admin/edit-product/${p._id}`)}
                title="Edit"
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(p._id)}
                title="Delete"
              >
                🗑️
              </button>
            </div>
          </div>

          <h4 className="product-name">{p.name}</h4>
          <p className="product-price">₹ {p.price} / KG</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
