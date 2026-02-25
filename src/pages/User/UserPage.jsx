import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserPage({ user, setUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const stored = JSON.parse(localStorage.getItem("user"));
      if (!stored) return;
      setUser(stored);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");  
    setUser(null);                     
    navigate("/login");               
  };

  if (!user) {
    return <h2 style={{ textAlign: "center" }}>No user logged in</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>User Profile</h1>

      <div className="user-card" style={styles.card}> 
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "350px",
    margin: "20px auto",
    textAlign: "left"
  },
  logoutButton: {
    marginTop: "20px",
    padding: "12px 20px",
    backgroundColor: "#ff4747",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default UserPage;