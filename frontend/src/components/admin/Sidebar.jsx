import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.title}>Admin Panel</h2>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/admin/dashboard">
            Dashboard
          </Link>

          <Link style={styles.link} to="/admin/products">
            Products
          </Link>

          <Link style={styles.link} to="/admin/users">
            Users
          </Link>

          <Link style={styles.link} to="/admin/orders">
            Orders
          </Link>
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
  title: {
    marginBottom: "25px",
    fontSize: "22px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    padding: "8px 10px",
    borderRadius: "6px",
    transition: "background 0.2s",
  },
  main: {
    flex: 1,
    padding: "20px",
    background: "#f5f5f5",
  },
};

export default Sidebar;
