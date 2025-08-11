import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function validateToken(token) {
  const response = await fetch("http://127.0.0.1:7005/validate-token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  return response.json();
}

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({ username: "", email: "" });
  const [error, setError] = useState(null);
  
  

  useEffect(() => {
    async function checkToken() {
      const token = localStorage.getItem("authToken");
      console.log("Token at profile load:", token);
      if (!token) {
        console.log("No token found, redirecting to login");
        navigate("/login");
        return;
      }

      try {
  const result = await validateToken(token);
  console.log("Validate token response:", result);

  if (result.success) {
    setUserData({ username: result.username, email: result.email });
  } else {
    console.log("Token invalid, removing and redirecting");
    localStorage.removeItem("authToken");
    navigate("/login");
  }
} catch (err) {
  console.error("Error validating token:", err);
  setError("Failed to validate token");
}
    }

    checkToken();
  }, [navigate]);

  if (error) {
    return <div style={{ padding: "1rem", color: "red" }}>{error}</div>;
  }

  if (!userData) {
    return <div style={{ padding: "1rem" }}>Loading profile...</div>;
  }

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out? You will need to log in again to interact with the community.");
    if (confirmed) {
      localStorage.removeItem("authToken");
      navigate("/login");
    }
};

  return (
    <main style={{ padding: "1rem" }}>
      <h1>{userData.username}'s Profile</h1>
      
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
