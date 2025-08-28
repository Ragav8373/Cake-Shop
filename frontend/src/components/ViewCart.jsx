// src/components/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa6";
function Cart() {
  const { cartItems, removeFromCart } = useCart();

  // ✅ Use totalPrice stored in cartItems (fallback to price × quantity if missing)
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.totalPrice || item.price * item.quantity),
    0
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <td>
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.productName}
                      style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td>
                    <a
                      href={`/product/${item.productId}`}
                      className="text-decoration-none"
                    >
                      {item.productName}
                    </a>
                  </td>

                  {/* ✅ Show base price */}
                  <td>₹{item.price}</td>

                  {/* ✅ Show quantity */}
                  <td>{item.quantity}</td>

                  {/* ✅ Use totalPrice if available, else fallback */}
                  <td>₹{item.totalPrice || item.price * item.quantity}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ✅ Cart Grand Total */}
          <div className="d-flex justify-content-end mt-3">
            <h5>Total: ₹{totalPrice}</h5>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
