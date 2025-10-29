import React from "react";

const Summary = () => {
  const containerStyle = {
    backgroundColor: "#0a1929",
    minHeight: "100vh",
    color: "#e3f2fd",
    padding: "20px"
  };

  const usernameStyle = {
    marginBottom: "2rem"
  };

  const dividerStyle = {
    border: "none",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(100, 150, 255, 0.3), transparent)",
    margin: "1.5rem 0"
  };

  const sectionStyle = {
    marginBottom: "2rem"
  };

  const sectionHeaderStyle = {
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    marginBottom: "1rem",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
  };

  const dataCardStyle = {
    backgroundColor: "#132f4c",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(100, 150, 255, 0.15)"
  };

  const innerDividerStyle = {
    border: "none",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
    margin: "1.5rem 0"
  };

  return (
    <div style={containerStyle}>
      {/* Username Section */}
      <div style={usernameStyle}>
        <h4 style={{ 
          color: "#e3f2fd", 
          fontWeight: "300",
          marginBottom: "1rem",
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          padding: "1rem 2rem",
          borderRadius: "12px",
          display: "inline-block",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
        }}>
          👋 Hi, User!
        </h4>
        <hr style={dividerStyle} />
      </div>

      {/* Equity Section */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <h5 style={{ color: "#e3f2fd", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            📈 <span>Equity</span>
          </h5>
        </div>

        <div style={dataCardStyle}>
          <div className="first">
            <h2 style={{ 
              color: "#4caf50", 
              fontWeight: "600",
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              textShadow: "0 2px 10px rgba(76, 175, 80, 0.3)"
            }}>
              ₹3.74k
            </h2>
            <p style={{ color: "#b3e5fc", fontSize: "0.9rem", margin: 0 }}>
              Margin available
            </p>
          </div>
          
          <hr style={innerDividerStyle} />

          <div className="second" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ flex: "1", minWidth: "120px" }}>
              <p style={{ color: "#b3e5fc", fontSize: "0.85rem", margin: "0.25rem 0" }}>
                Margins used
              </p>
              <p style={{ color: "#ff6b6b", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
                ₹0
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "120px" }}>
              <p style={{ color: "#b3e5fc", fontSize: "0.85rem", margin: "0.25rem 0" }}>
                Opening balance
              </p>
              <p style={{ color: "#2196f3", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
                ₹3.74k
              </p>
            </div>
          </div>
        </div>
        <hr style={dividerStyle} />
      </div>

      {/* Holdings Section */}
      <div style={sectionStyle}>
        <div style={sectionHeaderStyle}>
          <h5 style={{ color: "#e3f2fd", margin: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            💼 <span>Holdings (13)</span>
          </h5>
        </div>

        <div style={dataCardStyle}>
          <div className="first">
            <h2 style={{ 
              color: "#4caf50", 
              fontWeight: "600",
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              textShadow: "0 2px 10px rgba(76, 175, 80, 0.3)"
            }}>
              ₹1.55k 
              <small style={{ 
                color: "#4caf50", 
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                background: "rgba(76, 175, 80, 0.2)",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px"
              }}>
                +5.20%
              </small>
            </h2>
            <p style={{ color: "#b3e5fc", fontSize: "0.9rem", margin: 0 }}>
              P&L
            </p>
          </div>
          
          <hr style={innerDividerStyle} />

          <div className="second" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ flex: "1", minWidth: "120px" }}>
              <p style={{ color: "#b3e5fc", fontSize: "0.85rem", margin: "0.25rem 0" }}>
                Current Value
              </p>
              <p style={{ color: "#2196f3", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
                ₹31.43k
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "120px" }}>
              <p style={{ color: "#b3e5fc", fontSize: "0.85rem", margin: "0.25rem 0" }}>
                Investment
              </p>
              <p style={{ color: "#e3f2fd", fontSize: "1.1rem", fontWeight: "600", margin: 0 }}>
                ₹29.88k
              </p>
            </div>
          </div>
        </div>
        <hr style={dividerStyle} />
      </div>
    </div>
  );
};

export default Summary;