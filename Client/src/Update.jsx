import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./update.css";

const Update = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    _id: state?.user._id,
    name: state?.user.name || "",
    email: state?.user.email || "",
    password: state?.user.password || "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update user on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/res/hosting/${formData._id}`,
        formData
      );
      alert("User updated successfully");
      navigate("/details"); // Redirect after update
    } catch (error) {
      console.error("Error updating user:", error.message);
      alert("Failed to update user");
    }
  };

  return (
    <div className="update-container">
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-btn">
          Save Changes
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => navigate("/details")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Update;
