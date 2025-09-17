
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
    address: '',
    pincode: '',
    deliveryDate: '',
    deliveryTime: '',
    pickupDate: '',
    pickupTime: '',
  });

  // Time slots (common for delivery & pickup)
  const timeSlots = [
    { label: '8AM - 10AM', start: 8, end: 10 },
    { label: '10AM - 12PM', start: 10, end: 12 },
    { label: '12PM - 2PM', start: 12, end: 14 },
    { label: '2PM - 4PM', start: 14, end: 16 },
    { label: '4PM - 6PM', start: 16, end: 18 },
    { label: '6PM - 8PM', start: 18, end: 20 },
    { label: '8PM - 9PM', start: 20, end: 21 },
  ];

  // Current date & hour
  const today = new Date().toISOString().split('T')[0];
  const currentHour = new Date().getHours();

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
      clearCart();
      navigate('/');
    } catch (error) {
      console.error('Order failed:', error.response?.data || error.message);
      alert('Failed to place order. Please try again.');
    }
  };

  // Render time slot options with dynamic disable
  const renderTimeOptions = (selectedDate) => {
    return timeSlots.map((slot, index) => {
      const isToday = selectedDate === today;
      const disabled = isToday && currentHour >= slot.end;
      return (
        <option key={index} value={slot.label} disabled={disabled}>
          {slot.label} {disabled ? '(Unavailable)' : ''}
        </option>
      );
    });
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
              setFormData((prev) => ({
                ...prev,
                deliveryMethod: 'Store Pickup',
              }))
            }
          >
            Store Pickup
          </div>
          <div
            className={`delivery-card ${
              formData.deliveryMethod === 'Home Delivery' ? 'selected' : ''
            }`}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                deliveryMethod: 'Home Delivery',
              }))
            }
          >
            Home Delivery
          </div>
        </div>
      </div>

      {/* Extra Fields for Home Delivery */}
      {formData.deliveryMethod === 'Home Delivery' && (
        <div className="checkout-section">
          <div className="section-title">Home Delivery Info</div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Full Address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              required
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>
          <div className="form-row">
            <input
              type="date"
              name="deliveryDate"
              min={today}
              required
              value={formData.deliveryDate}
              onChange={handleChange}
            />
            <select
              name="deliveryTime"
              required
              value={formData.deliveryTime}
              onChange={handleChange}
            >
              <option value="">Select Delivery Slot</option>
              {renderTimeOptions(formData.deliveryDate)}
            </select>
          </div>
        </div>
      )}

      {/* Extra Fields for Store Pickup */}
      {formData.deliveryMethod === 'Store Pickup' && (
        <div className="checkout-section">
          <div className="section-title">Pickup Info</div>
          <div className="form-row">
            <input
              type="date"
              name="pickupDate"
              min={today}
              required
              value={formData.pickupDate}
              onChange={handleChange}
            />
            <select
              name="pickupTime"
              required
              value={formData.pickupTime}
              onChange={handleChange}
            >
              <option value="">Select Pickup Slot</option>
              {renderTimeOptions(formData.pickupDate)}
            </select>
          </div>
        </div>
      )}

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
