
// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../context/CartContext';

// function Checkout() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { cartItems, clearCart } = useCart();

//   const cart = state;

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     deliveryMethod: '',
//     paymentMethod: '',
//   });

//   useEffect(() => {
//     if (!cart || !cart.items || cart.items.length === 0) {
//       alert('No products found for checkout.');
//       navigate('/');
//     }
//   }, [cart, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.deliveryMethod) {
//       alert('Please select a delivery method.');
//       return;
//     }
//     if (!formData.paymentMethod) {
//       alert('Please select a payment method.');
//       return;
//     }

//     try {
//       // Calculate total price safely
//       const totalPrice = cart.items.reduce((sum, i) => sum + (Number(i.totalPrice) || 0), 0);

//       const orderData = {
//         ...formData,
//         items: cart.items.map(item => ({
//           productId: item.productId,
//           productName: item.productName,
//           image: item.image || '',
//           flavour: item.flavour || '',
//           quantity: item.quantity || 1,
//           features: item.features || [],
//           message: item.message || '',
//           totalPrice: Number(item.totalPrice) || 0,
//         })),
//         totalQuantity: cart.totalQuantity || cart.items.reduce((sum, i) => sum + (i.quantity || 1), 0),
//         total: totalPrice,          // Make sure backend expects "total"
//         totalPrice: totalPrice,     // Optional duplicate if backend expects this too
//       };

//       await axios.post('http://localhost:5000/api/orders', orderData);

//       alert('Order placed successfully!');
      
//       navigate('/');
//     } catch (error) {
//       console.error('Order failed:', error.response?.data || error.message);
//       alert('Failed to place order. Please try again.');
//     }
//   };

//   if (!cart || !cart.items || cart.items.length === 0) return null;

//   return (
//     <form className="checkout-container" onSubmit={handleSubmit}>
//       {/* Delivery Details */}
//       <div className="checkout-section">
//         <div className="section-title">Delivery Details</div>
//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Id"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="tel"
//             name="mobile"
//             placeholder="Mobile No"
//             required
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Delivery Method */}
//       <div className="checkout-section">
//         <div className="section-title">Delivery Method</div>
//         <div className="delivery-options">
//           <div
//             className={`delivery-card ${formData.deliveryMethod === 'Store Pickup' ? 'selected' : ''}`}
//             onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: 'Store Pickup' }))}
//             style={{ cursor: 'pointer' }}
//           >
//             Store Pickup
//           </div>
//           <div
//             className={`delivery-card ${formData.deliveryMethod === 'Home Delivery' ? 'selected' : ''}`}
//             onClick={() => setFormData(prev => ({ ...prev, deliveryMethod: 'Home Delivery' }))}
//             style={{ cursor: 'pointer' }}
//           >
//             Home Delivery
//           </div>
//         </div>
//       </div>

//       {/* Payment Method */}
//       <div className="checkout-section">
//         <div className="section-title">Payment Method</div>
//         <div className="form-group">
//           <select
//             name="paymentMethod"
//             required
//             value={formData.paymentMethod}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option value="COD">Cash on Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>
//         </div>
//       </div>

//       {/* Order Summary */}
//       <div className="checkout-section">
//         <div className="section-title">Confirm Order</div>
//         <table className="order-table">
//           <thead>
//             <tr>
//               <th>Product Name</th>
//               <th>Flavour</th>
//               <th>Quantity</th>
//               <th>Unit Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.items.map((product, index) => {
//               const unitPrice =
//                 product.totalPrice && product.quantity
//                   ? product.totalPrice / product.quantity
//                   : 0;
//               return (
//                 <tr key={index}>
//                   <td>{product.productName}</td>
//                   <td>{product.flavour}</td>
//                   <td>{product.quantity}</td>
//                   <td>Rs.{unitPrice.toFixed(2)}</td>
//                   <td>Rs.{product.totalPrice.toFixed(2)}</td>
//                 </tr>
//               );
//             })}
//             <tr className="summary-row">
//               <td colSpan="4" style={{ textAlign: 'right' }}>Delivery:</td>
//               <td>Rs.0.00</td>
//             </tr>
//             <tr className="summary-row">
//               <td colSpan="4" style={{ textAlign: 'right' }}>
//                 <strong>Total:</strong>
//               </td>
//               <td>
//                 <strong>
//                   Rs.{cart.items.reduce((sum, p) => sum + (p.totalPrice || 0), 0).toFixed(2)}
//                 </strong>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Confirm Button */}
//       <div className="checkout-section" style={{ textAlign: 'right' }}>
//         <button type="submit" className="submit-btn">Confirm Order</button>
//       </div>
//     </form>
//   );
// }

// export default Checkout;




import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const cart = state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    deliveryMethod: '',
    paymentMethod: '',
  });

  useEffect(() => {
    if (!cart || !cart.items || cart.items.length === 0) {
      alert('No products found for checkout.');
      navigate('/');
    }
  }, [cart, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.deliveryMethod) {
      alert('Please select a delivery method.');
      return;
    }
    if (!formData.paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    try {
      // Calculate total price safely
      const totalPrice = cart.items.reduce(
        (sum, i) => sum + (Number(i.totalPrice) || 0),
        0
      );

      const orderData = {
        ...formData,
        items: cart.items.map((item) => ({
          productId: item.productId,
          productName: item.productName,
          image: item.image || '',
          flavour: item.flavour || '',
          quantity: item.quantity || 1,
          features: item.features || [],
          message: item.message || '',
          totalPrice: Number(item.totalPrice) || 0,
        })),
        totalQuantity:
          cart.totalQuantity ||
          cart.items.reduce((sum, i) => sum + (i.quantity || 1), 0),
        total: totalPrice,
        totalPrice: totalPrice,
      };

      await axios.post('http://localhost:5000/api/orders', orderData);

      alert('Order placed successfully! ✅');

      // 🔴 Clear the cart so that cart count becomes 0
      clearCart();

      navigate('/');
    } catch (error) {
      console.error('Order failed:', error.response?.data || error.message);
      alert('Failed to place order. Please try again.');
    }
  };

  if (!cart || !cart.items || cart.items.length === 0) return null;

  return (
    <form className="checkout-container" onSubmit={handleSubmit}>
      {/* Delivery Details */}
      <div className="checkout-section">
        <div className="section-title">Delivery Details</div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Delivery Method */}
      <div className="checkout-section">
        <div className="section-title">Delivery Method</div>
        <div className="delivery-options">
          <div
            className={`delivery-card ${
              formData.deliveryMethod === 'Store Pickup' ? 'selected' : ''
            }`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, deliveryMethod: 'Store Pickup' }))
            }
            style={{ cursor: 'pointer' }}
          >
            Store Pickup
          </div>
          <div
            className={`delivery-card ${
              formData.deliveryMethod === 'Home Delivery' ? 'selected' : ''
            }`}
            onClick={() =>
              setFormData((prev) => ({ ...prev, deliveryMethod: 'Home Delivery' }))
            }
            style={{ cursor: 'pointer' }}
          >
            Home Delivery
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="checkout-section">
        <div className="section-title">Payment Method</div>
        <div className="form-group">
          <select
            name="paymentMethod"
            required
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="COD">Cash on Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>
      </div>

      {/* Order Summary */}
      <div className="checkout-section">
        <div className="section-title">Confirm Order</div>
        <table className="order-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Flavour</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((product, index) => {
              const unitPrice =
                product.totalPrice && product.quantity
                  ? product.totalPrice / product.quantity
                  : 0;
              return (
                <tr key={index}>
                  <td>{product.productName}</td>
                  <td>{product.flavour}</td>
                  <td>{product.quantity}</td>
                  <td>Rs.{unitPrice.toFixed(2)}</td>
                  <td>Rs.{product.totalPrice.toFixed(2)}</td>
                </tr>
              );
            })}
            <tr className="summary-row">
              <td colSpan="4" style={{ textAlign: 'right' }}>
                Delivery:
              </td>
              <td>Rs.0.00</td>
            </tr>
            <tr className="summary-row">
              <td colSpan="4" style={{ textAlign: 'right' }}>
                <strong>Total:</strong>
              </td>
              <td>
                <strong>
                  Rs.
                  {cart.items
                    .reduce((sum, p) => sum + (p.totalPrice || 0), 0)
                    .toFixed(2)}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Confirm Button */}
      <div className="checkout-section" style={{ textAlign: 'right' }}>
        <button type="submit" className="submit-btn">
          Confirm Order
        </button>
      </div>
    </form>
  );
}

export default Checkout;
