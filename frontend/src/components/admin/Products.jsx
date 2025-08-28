import { useState } from "react";
import ProductList from './ProductList';
import ProductForm from './ProductForm';


const Products = () => {
  const [editProduct, setEditProduct] = useState(null);
  const [reload, setReload] = useState(false);

  return (
    <div>
      <h2>Manage Products</h2>
      <ProductForm
        editProduct={editProduct}
        onSuccess={() => {
          setReload(!reload);
          setEditProduct(null);
        }}
      />
      <ProductList key={reload} onEdit={setEditProduct} />
    </div>
  );
};

export default Products;
