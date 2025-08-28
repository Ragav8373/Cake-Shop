import React, { useState } from 'react';

const emptyRow = { name: '', price: '' };

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    minQuantity: '',
    butterCream: [ { ...emptyRow } ],
    freshCream:  [ { ...emptyRow } ],
    exotic:      [ { ...emptyRow } ],
    image: null,
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFlavourChange = (category, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[category]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [category]: updated };
    });
  };

  const addFlavourRow = (category) => {
    setFormData((prev) => ({
      ...prev,
      [category]: [...prev[category], { ...emptyRow }],
    }));
  };

  const removeFlavourRow = (category, index) => {
    setFormData((prev) => {
      const updated = prev[category].filter((_, i) => i !== index);
      return { ...prev, [category]: updated.length ? updated : [ { ...emptyRow } ] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clean = (arr) => (arr || [])
      .map((r) => ({
        name: (r.name || '').trim(),
        price: r.price === '' ? 0 : Number(r.price),
      }))
      .filter((r) => r.name);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('minQuantity', formData.minQuantity);
    data.append('butterCream', JSON.stringify(clean(formData.butterCream)));
    data.append('freshCream', JSON.stringify(clean(formData.freshCream)));
    data.append('exotic', JSON.stringify(clean(formData.exotic)));
    data.append('featuresPrice', JSON.stringify({ eggless: 100, shape: 100, fondant: 600 }));
    if (formData.image) data.append('image', formData.image);

    try {
      const res = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (res.ok) {
        alert('Product added!');
        setFormData({
          name: '',
          price: '',
          minQuantity: '',
          butterCream: [ { ...emptyRow } ],
          freshCream:  [ { ...emptyRow } ],
          exotic:      [ { ...emptyRow } ],
          image: null,
        });
        e.target.reset();
      } else {
        alert(result.error || ' Failed to save product');
      }
    } catch (err) {
      console.error('Add product error', err);
      alert('Error saving product');
    }
  };

  const renderFlavourRows = (category, label) => (
    <div className="ap-flavour-group">
      <h4 className="ap-flavour-heading">{label}</h4>
      {formData[category].map((f, i) => (
        <div key={i} className="ap-flavour-row">
          <input
            type="text"
            className="ap-input ap-flavour-name"
            placeholder="Name"
            value={f.name}
            onChange={(e) => handleFlavourChange(category, i, 'name', e.target.value)}
          />
          <input
            type="number"
            className="ap-input ap-flavour-price"
            placeholder="Price"
            value={f.price}
            onChange={(e) => handleFlavourChange(category, i, 'price', e.target.value)}
          />
          <button
            type="button"
            className="ap-remove-row"
            onClick={() => removeFlavourRow(category, i)}
            aria-label="Remove flavour"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        className="ap-add-row"
        onClick={() => addFlavourRow(category)}
      >
        + Add {label} Flavour
      </button>
    </div>
  );

  return (
    <div className="addproduct-wrap">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="addproduct-form"   
      >
        <h2 className="ap-title">Add Product</h2>

        <label className="ap-label">
          Product Name *
          <input
            name="name"
            className="ap-input"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="ap-label">
          Base Price per KG *
          <input
            name="price"
            type="number"
            step="0.01"
            className="ap-input"
            placeholder="Base Price per KG"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label className="ap-label">
          Minimum Quantity (KG)
          <input
            name="minQuantity"
            type="number"
            step="0.5"
            className="ap-input"
            placeholder="Minimum Quantity (KG)"
            value={formData.minQuantity}
            onChange={handleChange}
          />
        </label>

        <hr className="ap-divider" />
        {renderFlavourRows('butterCream', 'Butter Cream')}

        <hr className="ap-divider" />
        {renderFlavourRows('freshCream', 'Fresh Cream')}

       

        <hr className="ap-divider" />

        <label className="ap-label">
          Product Image *
          <input
            type="file"
            name="image"
            accept="image/*"
            className="ap-file"
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="ap-submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
