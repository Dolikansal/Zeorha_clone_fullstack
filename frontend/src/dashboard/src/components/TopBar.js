import React from "react";
import Menu from "./Menu.js";

const TopBar = () => {
  const containerStyle = {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "space-between",
    // padding: "10px 20px",
    backgroundColor: "#0a1929",
    borderBottom: "1px solid rgba(100, 150, 255, 0.1)",
    width: "100%",
    boxSizing: "border-box"
  };

  const indicesContainerStyle = {
    display: "flex",
    alignItems: "center",
    // gap: "30px"
  };

  const indexStyle = {
    display: "flex",
    alignItems: "center",
    // gap: "6px"
  };

  const indexNameStyle = {
    color: "#b3e5fc",
    fontSize: "14px",
    fontWeight: "500",
    margin: "0"
  };

  const indexPointsStyle = {
    color: "#4caf50",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0"
  };

  return (
    <div className="topbar-container" style={containerStyle}>
      <div className="indices-container" style={indicesContainerStyle}>
        <div className="nifty" style={indexStyle}>
          <p className="index" style={indexNameStyle}>NIFTY 50</p>
          <p className="index-points" style={indexPointsStyle}>{100.2}</p>
          <p className="percent" style={indexPointsStyle}>(+0.15%)</p>
        </div>
        <div className="sensex" style={indexStyle}>
          <p className="index" style={indexNameStyle}>SENSEX</p>
          <p className="index-points" style={indexPointsStyle}>{100.2}</p>
          <p className="percent" style={indexPointsStyle}>(+0.15%)</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;