import { useState, useEffect } from "react";
import { addProduct, updateProduct } from "../../api"; 

const ProductForm = ({ editProduct, onSuccess }) => {
  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    if (editProduct) setForm(editProduct);
  }, [editProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editProduct) {
      await updateProduct(editProduct._id, form);
    } else {
      await addProduct(form);
    }
    setForm({ name: "", price: "" });
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button type="submit">
        {editProduct ? "Update" : "Add"} Product
      </button>
    </form>
  );
};

export default ProductForm;
