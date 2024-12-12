import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./details.css";

const Details = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/res/hosting");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/res/hosting/${id}`);
      alert("User deleted successfully");
      fetchUsers(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting user:", error.message);
      alert("Failed to delete user");
    }
  };

  // Navigate to Update Page
  const goToUpdatePage = (user) => {
    navigate("/update", { state: { user } });
  };

  return (
    <div className="details-container">
      <h1>User Details</h1>
      <div className="add-user-container">
        {/* Button to add a new user, navigates to Post page */}
        <Link to="/">
          <button className="add-user-btn">Add New User</button>
        </Link>
      </div>
      <div className="card-container">
        {users.map((user) => (
          <div className="user-card" key={user._id}>
            <h2>{user.name}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              className="update-btn"
              onClick={() => goToUpdatePage(user)}
            >
              Update
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
