import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/profileService";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const result = await registerUser(username, password, email);
      if (result.success) {
        setSuccess("Registration successful! You can now log in.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      setError("Error communicating with profile service");
    }
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} aria-label="Registration form">
        <div>
          <label htmlFor="username">Username:</label><br />
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <label htmlFor="password">Password:</label><br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Register
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </main>
  );
}
