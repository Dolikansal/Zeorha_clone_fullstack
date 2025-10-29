import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const containerStyle = {
    backgroundColor: "#0a1929",
    minHeight: "100vh",
    color: "#e3f2fd",
    padding: "20px"
  };

  const fundsHeaderStyle = {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    borderRadius: "16px",
    padding: "2.5rem",
    marginBottom: "2rem",
    textAlign: "center",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    position: "relative",
    overflow: "hidden"
  };

  const tableStyle = {
    backgroundColor: "#132f4c",
    borderRadius: "16px",
    padding: "2rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(100, 150, 255, 0.15)",
    marginBottom: "2rem"
  };

  const dataRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease"
  };

  const sectionHeaderStyle = {
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    padding: "1.5rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
  };

  const commodityStyle = {
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    borderRadius: "16px",
    padding: "3rem 2rem",
    textAlign: "center",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    marginTop: "2rem",
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

  return (
    <div style={containerStyle}>
      {/* Funds Header */}
      <div style={fundsHeaderStyle}>
        <div style={glowEffect}></div>
        <p className="h3 mb-4" style={{ color: "#e3f2fd", fontWeight: "300", letterSpacing: "0.5px" }}>
          💸 Instant, zero-cost fund transfers with UPI
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link className="btn" style={{ 
            background: "linear-gradient(135deg, #00c853 0%, #64dd17 100%)",
            color: "white",
            padding: "0.75rem 2.5rem",
            borderRadius: "10px",
            border: "none",
            fontWeight: "600",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(0, 200, 83, 0.3)",
            transition: "all 0.3s ease"
          }}>
            📥 Add funds
          </Link>
          <Link className="btn" style={{ 
            background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
            color: "white",
            padding: "0.75rem 2.5rem",
            borderRadius: "10px",
            border: "none",
            fontWeight: "600",
            fontSize: "1rem",
            boxShadow: "0 4px 15px rgba(33, 150, 243, 0.3)",
            transition: "all 0.3s ease"
          }}>
            📤 Withdraw
          </Link>
        </div>
      </div>

      {/* Equity Section - Full Width */}
      <div className="row" >
        <div className="col-12" style={{marginLeft : "80px", width:"80%"}}>
          <div style={sectionHeaderStyle}>
            <div className="d-flex align-items-center">
              <span className="h4 mb-0 me-3" style={{ color: "#e3f2fd" , marginRight: "390px" }}>📈 Equity</span>
              <span style={{ 
                backgroundColor: "rgba(33, 150, 243, 0.2)", 
                color: "#64b5f6",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px",
                fontSize: "0.875rem",
                fontWeight: "500"
              }}>
                Live Updates
              </span>
            </div>
          </div>
          
          <div style={tableStyle}>
            {/* Key Metrics */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div style={{ 
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(76, 175, 80, 0.3)",
                  textAlign: "center"
                }}>
                  <p className="mb-2" style={{ color: "#b3e5fc", fontSize: "0.9rem" }}>Available Margin</p>
                  <p className="h4 mb-0 fw-bold" style={{ color: "#4caf50" }}>₹4,043.10</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ 
                  backgroundColor: "rgba(244, 67, 54, 0.1)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(244, 67, 54, 0.3)",
                  textAlign: "center"
                }}>
                  <p className="mb-2" style={{ color: "#b3e5fc", fontSize: "0.9rem" }}>Used Margin</p>
                  <p className="h4 mb-0 fw-bold" style={{ color: "#ff6b6b" }}>₹3,757.30</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{ 
                  backgroundColor: "rgba(33, 150, 243, 0.1)",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(33, 150, 243, 0.3)",
                  textAlign: "center"
                }}>
                  <p className="mb-2" style={{ color: "#b3e5fc", fontSize: "0.9rem" }}>Available Cash</p>
                  <p className="h4 mb-0 fw-bold" style={{ color: "#2196f3" }}>₹4,043.10</p>
                </div>
              </div>
            </div>

            {/* Detailed Table */}
            <div className="row">
              <div className="col-md-6">
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Opening Balance</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹4,043.10</p>
                </div>
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Current Balance</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹3,736.40</p>
                </div>
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Payin</p>
                  <p className="mb-0 fw-bold" style={{ color: "#4caf50" }}>₹4,064.00</p>
                </div>
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>SPAN</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹0.00</p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Delivery Margin</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹0.00</p>
                </div>
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Exposure</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹0.00</p>
                </div>
                <div style={dataRowStyle}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Options Premium</p>
                  <p className="mb-0 fw-bold" style={{ color: "#e3f2fd" }}>₹0.00</p>
                </div>
                <div style={{...dataRowStyle, borderBottom: "none"}}>
                  <p className="mb-0" style={{ color: "#b3e5fc" }}>Total Collateral</p>
                  <p className="mb-0 fw-bold" style={{ color: "#bb86fc" }}>₹0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commodity Section - At the bottom */}
      <div className="row">
        <div className="col-12" style={{width: "100%"}}>
          <div style={commodityStyle}>
            <div style={glowEffect}></div>
            <div className="h3 mb-3" style={{ color: "#e3f2fd" }}>⚡ Expand Your Trading</div>
            <p className="h5 mb-4" style={{ color: "#b3e5fc", fontWeight: "300" }}>
              You don't have a commodity account yet
            </p>
            <p className="mb-1" style={{ color: "#90caf9" , marginBottom: "30px" }}>
              Start trading commodities with zero brokerage and advanced tools
            </p>
            <Link className="btn" style={{ 
              background: "linear-gradient(135deg, #ff6b35 0%, #ff8e53 100%)",
              color: "white",
              padding: "1rem 3rem",
              borderRadius: "12px",
              border: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              boxShadow: "0 6px 20px rgba(255, 107, 53, 0.4)",
              transition: "all 0.3s ease"
            }}>
              🚀 Open Commodity Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;