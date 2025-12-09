// import React from "react";
// import { useCart } from "../context/CartContext";
// import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";

// function ViewCart() {
//   const { cartItems, updateQuantity, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   // Helper to calculate total price for a single item
//   const getItemTotal = (item) => {
//     const perKg = Number(item.price) || 0;
//     const qty = Number(item.quantity) || 0;
//     const egglessAdd = item.features?.includes("eggless")
//       ? (Number(item.featuresPrice?.eggless) || 0) * qty
//       : 0;
//     const shapeAdd = item.features?.includes("shape")
//       ? (Number(item.featuresPrice?.shape) || 0) * qty
//       : 0;
//     const fondantAdd = item.features?.includes("fondant")
//       ? Number(item.featuresPrice?.fondant) || 0
//       : 0;

//     return perKg * qty + egglessAdd + shapeAdd + fondantAdd;
//   };

//   // Calculate grand total dynamically
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + getItemTotal(item),
//     0
//   );

//   const handleDecrease = (item) => {
//     const step = 0.5; // fractional step
//     if (item.quantity > step) {
//       const newQty = parseFloat((item.quantity - step).toFixed(2));
//       updateQuantity(item.productId, item.flavour, newQty);
//     }
//   };

//   const handleIncrease = (item) => {
//     const step = 0.5;
//     const newQty = parseFloat((item.quantity + step).toFixed(2));
//     updateQuantity(item.productId, item.flavour, newQty);
//   };

//   const handleRemove = (item) => {
//     removeFromCart(item.productId, item.flavour);
//   };

//   return (
//     <div className="container my-5">
//       <h2 className="mb-4">Your Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="table-responsive">
//             <table className="table table-bordered align-middle text-center">
//               <thead className="table-light">
//                 <tr>
//                   <th>Product</th>
//                   <th>Name</th>
//                   <th>Price / Kg</th>
//                   <th>Quantity</th>
//                   <th>Total</th>
//                   <th>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item, index) => (
//                   <tr key={index}>
//                     <td>
//                       <img
//                         src={`http://localhost:5000/uploads/${item.image}`}
//                         alt={item.productName}
//                         style={{
//                           width: 60,
//                           height: 60,
//                           objectFit: "cover",
//                           borderRadius: "4px",
//                         }}
//                       />
//                     </td>
//                     <td>
//                       <a
//                         href={`/product/${item.productId}`}
//                         className="text-decoration-none"
//                       >
//                         {item.productName}{" "}
//                         {item.flavour ? `(${item.flavour})` : ""}
//                       </a>
//                     </td>
//                     <td>₹{Number(item.price)?.toFixed(2) || 0}</td>
//                     <td>
//                       <div className="d-flex justify-content-center align-items-center gap-2">
//                         <button
//                           className="btn btn-sm btn-outline-secondary"
//                           onClick={() => handleDecrease(item)}
//                         >
//                           <FaMinus />
//                         </button>
//                         <span>{item.quantity}</span>
//                         <button
//                           className="btn btn-sm btn-outline-secondary"
//                           onClick={() => handleIncrease(item)}
//                         >
//                           <FaPlus />
//                         </button>
//                       </div>
//                     </td>
//                     <td>₹{getItemTotal(item).toFixed(2)}</td>
//                     <td>
//                       <button
//                         className="btn btn-sm btn-outline-danger"
//                         onClick={() => handleRemove(item)}
//                       >
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Cart summary */}
//           <div className="d-flex justify-content-between align-items-center mt-3">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() => navigate("/")}
//             >
//               Continue Shopping
//             </button>

//             <h5>Total: ₹{totalPrice.toFixed(2)}</h5>

//             <button
//               className="btn btn-success"
//               onClick={() => navigate("/checkout")}
//             >
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default ViewCart;

import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ViewCart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Helper to calculate total price for a single item
  const getItemTotal = (item) => {
    const perKg = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;

    const egglessAdd =
      item.features?.includes("eggless") && item.featuresPrice?.eggless
        ? Number(item.featuresPrice.eggless) * qty
        : 0;

    const shapeAdd =
      item.features?.includes("shape") && item.featuresPrice?.shape
        ? Number(item.featuresPrice.shape) * qty
        : 0;

    const fondantAdd =
      item.features?.includes("fondant") && item.featuresPrice?.fondant
        ? Number(item.featuresPrice.fondant)
        : 0;

    return perKg * qty + egglessAdd + shapeAdd + fondantAdd;
  };

  // Calculate grand total dynamically
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + getItemTotal(item),
    0
  );

  const handleDecrease = (item) => {
    const step = 0.5; // fractional step
    if (item.quantity > step) {
      const newQty = parseFloat((item.quantity - step).toFixed(2));
      updateQuantity(item.productId, item.flavour, newQty);
    }
  };

  const handleIncrease = (item) => {
    const step = 0.5;
    const newQty = parseFloat((item.quantity + step).toFixed(2));
    updateQuantity(item.productId, item.flavour, newQty);
  };

  const handleRemove = (item) => {
    removeFromCart(item.productId, item.flavour);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price / Kg</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => {
                  const total = getItemTotal(item);
                  const effectivePerKg = item.quantity
                    ? total / item.quantity
                    : 0;

                  return (
                    <tr key={index}>
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
                          {item.productName}{" "}
                          {item.flavour ? `(${item.flavour})` : ""}
                        </a>
                      </td>

                      {/* Show dynamic Price / Kg */}
                      <td>₹{effectivePerKg.toFixed(2)}</td>

                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleDecrease(item)}
                          >
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => handleIncrease(item)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>

                      <td>₹{total.toFixed(2)}</td>

                      <td>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleRemove(item)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Cart summary */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>

            {/* <h5>Total: ₹{totalPrice.toFixed(2)}</h5> */}

            <button
              className="btn btn-success"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ViewCart;
