import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  const containerStyle = {
    backgroundColor: "#0a1929",
    color: "#e3f2fd",
    padding: "20px",
    minHeight: "100vh"
  };

  const titleStyle = {
    color: "#e3f2fd",
    fontWeight: "300",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    background: "linear-gradient(135deg, #1a237e 0%, #283593 100%)",
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    border: "1px solid rgba(100, 150, 255, 0.2)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    display: "inline-block"
  };

  const tableContainerStyle = {
    backgroundColor: "#132f4c",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(100, 150, 255, 0.15)",
    overflow: "hidden"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    color: "#e3f2fd"
  };

  const headerStyle = {
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    color: "#e3f2fd",
    padding: "1rem 0.75rem",
    textAlign: "left",
    fontWeight: "500",
    fontSize: "0.9rem",
    borderBottom: "2px solid rgba(100, 150, 255, 0.3)",
    textTransform: "uppercase",
    letterSpacing: "0.5px"
  };

  const cellStyle = {
    padding: "1rem 0.75rem",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    fontSize: "0.9rem"
  };

  const rowStyle = {
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const profitStyle = {
    color: "#4caf50",
    fontWeight: "600",
    fontSize: "0.9rem"
  };

  const lossStyle = {
    color: "#ff6b6b",
    fontWeight: "600",
    fontSize: "0.9rem"
  };

  const hoverStyle = {
    backgroundColor: "rgba(100, 150, 255, 0.05)"
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>📊 Positions ({positions.length})</h3>

      <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>Product</th>
              <th style={headerStyle}>Instrument</th>
              <th style={headerStyle}>Qty.</th>
              <th style={headerStyle}>Avg.</th>
              <th style={headerStyle}>LTP</th>
              <th style={headerStyle}>P&L</th>
              <th style={headerStyle}>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              const pnlValue = (curValue - stock.avg * stock.qty).toFixed(2);

              return (
                <tr 
                  key={index} 
                  style={{
                    ...rowStyle,
                    ...cellStyle,
                    ...(index % 2 === 0 ? hoverStyle : {})
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(100, 150, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? "rgba(100, 150, 255, 0.05)" : "transparent";
                  }}
                >
                  <td style={cellStyle}>
                    <span style={{
                      background: "rgba(33, 150, 243, 0.2)",
                      color: "#64b5f6",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: "500"
                    }}>
                      {stock.product}
                    </span>
                  </td>
                  <td style={{...cellStyle, fontWeight: "500"}}>{stock.name}</td>
                  <td style={cellStyle}>{stock.qty}</td>
                  <td style={cellStyle}>₹{stock.avg.toFixed(2)}</td>
                  <td style={cellStyle}>₹{stock.price.toFixed(2)}</td>
                  <td style={{
                    ...cellStyle,
                    ...(isProfit ? profitStyle : lossStyle)
                  }}>
                    ₹{pnlValue}
                    {isProfit ? " 📈" : " 📉"}
                  </td>
                  <td style={{
                    ...cellStyle,
                    ...(stock.isLoss ? lossStyle : profitStyle)
                  }}>
                    {stock.day}
                    {stock.isLoss ? " 🔻" : " 🔺"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div style={{
        marginTop: "1.5rem",
        textAlign: "center",
        color: "#90caf9",
        fontSize: "0.9rem"
      }}>
        💡 Real-time position tracking with live P&L updates
      </div>
    </div>
  );
};

export default Positions;