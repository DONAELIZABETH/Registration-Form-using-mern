import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For navigation
import "./reg.css";

function Post() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Corrected the API endpoint
      await axios.post("http://localhost:5000/res/hosting", {
        name,
        email,
        password,
      });

      alert("User added successfully"); // Success message

      // Clear input fields
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      // Error handling message
      alert(
        `Error adding user: ${error.response?.data?.error || error.message}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Add User</button>

      {/* Link for viewing user details */}
      <Link to="/details">
        <button type="button">VIEW DETAILS</button>
      </Link>
    </form>
  );
}

export default Post;
