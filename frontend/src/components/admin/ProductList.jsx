import { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../../api";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product._id} style={{ marginBottom: "8px" }}>
          {product.name} - ₹{product.price}
          <button style={{ marginLeft: "8px" }} onClick={() => onEdit(product)}>
            Edit
          </button>
          <button style={{ marginLeft: "4px" }} onClick={() => handleDelete(product._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
