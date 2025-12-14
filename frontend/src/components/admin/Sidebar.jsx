import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2>Admin Panel</h2>
        <nav style={styles.nav}>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/productlist">Product List</Link>
          <Link to="/admin/productform">Add Product</Link>
        </nav>
      </aside>

      {/* Page Content */}
      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    background: "#111",
    color: "#fff",
    padding: "20px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  main: {
    flex: 1,
    padding: "20px",
    background: "#f5f5f5",
  },
};

export default Sidebar;
