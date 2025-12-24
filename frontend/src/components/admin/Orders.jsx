import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Fetch orders error:", err));
  }, []);

  return (
    <div className="admin-page">
      <h2 className="admin-title">Orders</h2>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Delivery Method</th>
              <th>Payment Method</th>
              <th>Address</th>
              <th>Products</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o) => (
              <tr key={o._id}>
                <td>{o.name || "-"}</td>
                <td>{o.email || "-"}</td>
                <td>{o.mobile || "-"}</td>
                <td>{o.deliveryMethod || "-"}</td>
                <td>{o.paymentMethod || "-"}</td>
                <td>
                  {o.address || "-"} {o.pincode ? `, ${o.pincode}` : ""}
                </td>
                <td>
                  {o.items?.length > 0
                    ? o.items.map((item, idx) => (
                        <div key={idx}>
                          {item.productName} (Qty: {item.quantity})
                        </div>
                      ))
                    : "-"}
                </td>
                <td>₹ {o.totalPrice ?? 0}</td>
                <td>
                  <span
                    className={`status ${
                      o.status === "Delivered" ? "delivered" : "pending"
                    }`}
                  >
                    {o.status || "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && <p className="empty-text">No orders found</p>}
      </div>
    </div>
  );
};

export default Orders;
