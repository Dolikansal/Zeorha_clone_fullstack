import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const containerStyle = {
    backgroundColor: "#0a1929",
    minHeight: "100vh",
    color: "#e3f2fd",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const noOrdersStyle = {
    textAlign: "center",
    background: "linear-gradient(135deg, #132f4c 0%, #1a237e 100%)",
    borderRadius: "20px",
    padding: "1rem 1rem",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    maxWidth: "500px",
    width: "100%",
    position: "relative",
    overflow: "hidden"
  };

  const glowEffect = {
    position: "absolute",
    top: "-50%",
    right: "-50%",
    width: "100%",
    height: "200%",
    background: "radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)",
    pointerEvents: "none"
  };

  const iconStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    // display: "block"
  };

  return (
    <div style={containerStyle}>
      <div style={noOrdersStyle}>
        <div style={glowEffect}></div>
        
        <div style={iconStyle}>📊</div>
        
        <h2 style={{ 
          color: "#e3f2fd", 
          fontSize: "1.8rem",
          marginBottom: "0.5rem",
        }}>
          No Orders Today
        </h2>
        
        <p style={{ 
          color: "#b3e5fc", 
          fontSize: "1.1rem",
          marginBottom: "0.5rem",
          lineHeight: "1.6",
          fontWeight: "300"
        }}>
          You haven't placed any orders today
        </p>

        <Link 
          to={"/"} 
          className="btn" 
          style={{ 
            background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
            color: "white",
            padding: "1rem 2.5rem",
            borderRadius: "12px",
            border: "none",
            fontWeight: "600",
            fontSize: "1.1rem",
            boxShadow: "0 6px 20px rgba(33, 150, 243, 0.4)",
            transition: "all 0.3s ease",
            textDecoration: "none",
            display: "inline-block"
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 25px rgba(33, 150, 243, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 6px 20px rgba(33, 150, 243, 0.4)";
          }}
        >
          🚀 Get Started
        </Link>

        <p style={{ 
          color: "#90caf9", 
          fontSize: "0.9rem",
          marginTop: "2rem",
          marginBottom: "0",
          fontStyle: "italic"
        }}>
          Start your trading journey today!
        </p>
      </div>
    </div>
  );
};

export default Orders;