import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Products</h2>
        <button
          className="add-product-btn"
          onClick={() => navigate("/admin/addproduct")}
        >
          + Add Product
        </button>
      </div>

      <ProductList />
    </div>
  );
};

export default Products;
