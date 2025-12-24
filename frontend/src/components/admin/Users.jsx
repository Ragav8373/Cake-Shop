import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="admin-page">
      <h2 className="admin-title">Users</h2>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, index) => (
              <tr key={u._id}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.number}</td> {/* 📞 mobile */}
                <td>{u.email}</td>
                <td>
                  <span className="badge">
                    {u.role || "User"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="empty-text">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Users;
