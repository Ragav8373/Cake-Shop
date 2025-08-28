

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart(); // ✅ use from CartContext

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const [quantity, setQuantity] = useState(0.5);
  const [features, setFeatures] = useState({
    eggless: false,
    shape: false,
    fondant: false,
  });
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch product data
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch(`http://localhost:5000/api/products/${id}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        const minQ = parseFloat(data?.minQuantity);
        if (!isNaN(minQ) && minQ > 0) setQuantity(minQ);
        setLoadError('');
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Fetch product failed', err);
          setLoadError('Unable to load product.');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  const { minQty, step } = useMemo(() => {
    const mq = parseFloat(product?.minQuantity);
    if (!isNaN(mq) && mq > 0) {
      return { minQty: mq, step: mq < 1 ? 0.5 : 1 };
    }
    return { minQty: 0.5, step: 0.5 };
  }, [product]);

  const handleFeatureChange = (e) => {
    const { name, checked } = e.target;
    setFeatures((prev) => ({ ...prev, [name]: checked }));
  };

  const decQty = () => setQuantity((prev) => Math.max(minQty, parseFloat((prev - step).toFixed(2))));
  const incQty = () => setQuantity((prev) => parseFloat((prev + step).toFixed(2)));

  const resetAll = () => {
    setQuantity(minQty);
    setFeatures({ eggless: false, shape: false, fondant: false });
    setSelectedFlavour(null);
    setMessage('');
  };


 const handleAddToCart = () => {
  if (!selectedFlavour || !Object.values(features).some(f => f)) {
    alert('❗ Please select both a flavour and at least one special feature.');
    return;
  }

  const orderData = {
    productId: product._id,
    productName: product.name,
    image: product.image,
    flavour: selectedFlavour.name,
    quantity,
    features: Object.keys(features).filter((key) => features[key]),
    message,
    totalPrice: totalPriceNum,
  };

  if (cartItems.some(item => item.productId === product._id)) {
    alert('Product already in cart!');
    return;
  }

  addToCart(orderData);
  alert('Added to cart!');
  resetAll();
};

  const getImageUrl = () => product?.image ? `http://localhost:5000/uploads/${product.image}` : '';

  const butterCream = product?.butterCream ?? [];
  const freshCream = product?.freshCream ?? [];
  const exotic = product?.exotic ?? [];

  const fp = product?.featuresPrice || {};
  const egglessAdd = features.eggless ? (Number(fp.eggless) || 0) * quantity : 0;
  const shapeAdd = features.shape ? (Number(fp.shape) || 0) * quantity : 0;
  const fondantAdd = features.fondant ? Number(fp.fondant) || 0 : 0;

  const perKg = selectedFlavour?.price || product?.price || 0;
  const totalPriceNum = (perKg * quantity) + egglessAdd + shapeAdd + fondantAdd;
  const totalPrice = isNaN(totalPriceNum) ? '0' : Math.round(totalPriceNum).toString();

  const flavourLabel = selectedFlavour?.name || 'Please Select the Flavour';
  const featureLabels = [
    features.eggless && 'Eggless',
    features.shape && 'Shape',
    features.fondant && 'Fondant',
  ].filter(Boolean).join(', ') || 'Nil';

  if (loading) return <div style={{ padding: 20 }}>Loading…</div>;
  if (loadError || !product) return <div style={{ padding: 20, color: 'red' }}>{loadError || 'Product not found.'}</div>;

  return (
    <div className="product-page">
      <div className="left-section">
        <div className="main-image">
          {getImageUrl() ? <img src={getImageUrl()} alt={product.name} /> : <div className="img-placeholder">No Image</div>}
        </div>
        <div className="thumbnail-image">
          {getImageUrl() && <img src={getImageUrl()} alt={product.name} />}
        </div>
      </div>

      <div className="middle-section">
        <div className="quantity-box card-block">
          <label>Quantity in Kg(s)</label>
          <div className="qty-input">
            <button type="button" onClick={decQty} disabled={quantity <= minQty}>-</button>
            <input type="text" value={quantity} readOnly />
            <button type="button" onClick={incQty}>+</button>
          </div>
          <p className="min-qty">Minimum {minQty} Kg</p>
        </div>

        <div className="features-box card-block">
          <label>Special Features</label>
          <div className="feature-checkboxes">
            <label >
              <input type="checkbox" name="eggless" checked={features.eggless} onChange={handleFeatureChange} />
              <span className='cartinput'>Eggless</span>
            </label>
            <label>
              <input type="checkbox" name="shape" checked={features.shape} onChange={handleFeatureChange} />
              <span className='cartinput'> Shape</span>
             
            </label>
            <label>
              <input type="checkbox" name="fondant" checked={features.fondant} onChange={handleFeatureChange} />
              <span className='cartinput'> Fondant</span>
             
            </label>
          </div>
        </div>

        <div className="flavour-box card-block">
          <label>Choose Flavour *</label>

          {butterCream.length > 0 && (
            <>
              <br /><strong>Butter Cream</strong>
              <div className="flavour-group">
                {butterCream.map((f, i) => (
                  <button key={`bc-${i}`} className={`flavour-btn ${selectedFlavour?.name === f.name ? 'selected' : ''}`} onClick={() => setSelectedFlavour(f)} title={`₹${f.price} / Kg`}>
                    {f.name}
                  </button>
                ))}
              </div>
            </>
          )}

          {freshCream.length > 0 && (
            <>
              <strong>Fresh Cream</strong>
              <div className="flavour-group">
                {freshCream.map((f, i) => (
                  <button key={`fc-${i}`} className={`flavour-btn ${selectedFlavour?.name === f.name ? 'selected' : ''}`} onClick={() => setSelectedFlavour(f)} title={`₹${f.price} / Kg`}>
                    {f.name}
                  </button>
                ))}
              </div>
            </>
          )}

          {exotic.length > 0 && (
            <>
              <strong>Exotic</strong>
              <div className="flavour-group">
                {exotic.map((f, i) => (
                  <button key={`ex-${i}`} className={`flavour-btn ${selectedFlavour?.name === f.name ? 'selected' : ''}`} onClick={() => setSelectedFlavour(f)} title={`₹${f.price} / Kg`}>
                    {f.name}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="message-box card-block">
          <label>Message on Cake</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </div>

      <div className="summary-card">
        <h4>Cake Summary</h4>
        <p><strong>Flavour:</strong> {flavourLabel}</p>
        <p><strong>Quantity:</strong> {quantity} KGs</p>
        <p><strong>Features:</strong> {featureLabels}</p>
        <p><strong>Price:</strong> ₹{totalPrice}</p>
        {message && <p><strong>Message:</strong> {message}</p>}

        <div className="summary-buttons">
   {/* <button onClick={() => addToCart(product)} className="reset-btn">Add To Cart</button> */}
<button onClick={handleAddToCart} className="reset-btn">Add To Cart</button>

          <button
            type="button"
            className="order-btn"
            onClick={() => {
              const hasFeatureSelected = Object.values(features).some(v => v);
              if (!selectedFlavour || !hasFeatureSelected) {
                alert('❗ Please select both a flavour and at least one special feature.');
                return;
              }

              const orderData = {
                productId: product._id,
                productName: product.name,
                image: product.image,
                flavour: selectedFlavour.name,
                quantity,
                features: Object.keys(features).filter(key => features[key]),
                message,
                totalPrice: totalPriceNum,
              };

              navigate('/checkout', { state: orderData });
            }}
          >
            🛒 Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
