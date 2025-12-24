import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const emptyRow = { name: "", price: "" };

const EditProduct = () => {
  const { id } = useParams(); // product id
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    minQuantity: "",
    butterCream: [{ ...emptyRow }],
    freshCream: [{ ...emptyRow }],
    exotic: [{ ...emptyRow }],
    category: "",
    image: null,
  });

  /* ---------------- FETCH PRODUCT ---------------- */
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          name: data.name || "",
          price: data.price || "",
          minQuantity: data.minQuantity || "",
          butterCream: data.butterCream?.length
            ? data.butterCream
            : [{ ...emptyRow }],
          freshCream: data.freshCream?.length
            ? data.freshCream
            : [{ ...emptyRow }],
          exotic: data.exotic?.length
            ? data.exotic
            : [{ ...emptyRow }],
          category: data.category || "",
          image: null, // image optional
        });
      });
  }, [id]);

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleFlavourChange = (type, index, field, value) => {
    const updated = [...formData[type]];
    updated[index][field] = value;
    setFormData({ ...formData, [type]: updated });
  };

  const addRow = (type) => {
    setFormData({
      ...formData,
      [type]: [...formData[type], { ...emptyRow }],
    });
  };

  const removeRow = (type, index) => {
    const updated = formData[type].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [type]: updated.length ? updated : [{ ...emptyRow }],
    });
  };

  /* ---------------- UPDATE ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const clean = (arr) =>
      arr
        .filter((r) => r.name)
        .map((r) => ({ name: r.name, price: Number(r.price) || 0 }));

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("minQuantity", formData.minQuantity);
    data.append("category", formData.category);
    data.append("butterCream", JSON.stringify(clean(formData.butterCream)));
    data.append("freshCream", JSON.stringify(clean(formData.freshCream)));
    data.append("exotic", JSON.stringify(clean(formData.exotic)));
    if (formData.image) data.append("image", formData.image);

    const res = await fetch(
      `http://localhost:5000/api/products/${id}`,
      {
        method: "PUT",
        body: data,
      }
    );

    if (res.ok) {
      alert("Product updated successfully!");
      navigate("/admin/products");
    } else {
      alert("Update failed");
    }
  };

  /* ---------------- UI ---------------- */
  const renderRows = (type, label) => (
    <>
      <h4>{label}</h4>
      {formData[type].map((f, i) => (
        <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          <input
            placeholder="Name"
            value={f.name}
            onChange={(e) =>
              handleFlavourChange(type, i, "name", e.target.value)
            }
          />
          <input
            type="number"
            placeholder="Price"
            value={f.price}
            onChange={(e) =>
              handleFlavourChange(type, i, "price", e.target.value)
            }
          />
          <button type="button" onClick={() => removeRow(type, i)}>
            ✕
          </button>
        </div>
      ))}
      <button type="button" onClick={() => addRow(type)}>
        + Add {label}
      </button>
      <hr />
    </>
  );

  return (
    <form onSubmit={handleSubmit} className="addproduct-form">
      <h2>Edit Product</h2>

      <input
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Base Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        name="minQuantity"
        type="number"
        step="0.5"
        placeholder="Min Quantity"
        value={formData.minQuantity}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option>wedding cakes</option>
        <option>birthday cakes</option>
        <option>theme cakes</option>
      </select>

      {renderRows("butterCream", "Butter Cream")}
      {renderRows("freshCream", "Fresh Cream")}
      {renderRows("exotic", "Exotic")}

      <input type="file" name="image" onChange={handleChange} />

      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProduct;
