import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${id}`);
      fetchUsers(); // refresh list
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#e6d8b5",
          minHeight: "100vh",
          padding: "40px"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Users
        </h2>

        <div
          style={{
            background: "#f4e7c5",
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "center"
            }}
          >
            <thead>
              <tr style={{ background: "#f4a300" }}>
                <th style={thStyle}>Sl/No</th>
                <th style={thStyle}>UserId</th>
                <th style={thStyle}>User Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Operation</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} style={{ background: "#fff" }}>
                  <td style={tdStyle}>{index + 1}</td>
                  <td style={tdStyle}>{user._id}</td>
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>
                    <button
                      style={viewBtn}
                      onClick={() => alert("View user")}
                    >
                      View
                    </button>

                    <button
                      style={deleteBtn}
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd"
};

const viewBtn = {
  background: "#f4a300",
  border: "none",
  padding: "6px 12px",
  marginRight: "10px",
  cursor: "pointer",
  borderRadius: "4px"
};

const deleteBtn = {
  background: "red",
  color: "white",
  border: "none",
  padding: "6px 12px",
  cursor: "pointer",
  borderRadius: "4px"
};

export default AdminUsers;