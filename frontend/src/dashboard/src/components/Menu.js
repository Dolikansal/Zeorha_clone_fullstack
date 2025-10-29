import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menusStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menuListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    alignItems: "center",
  };

  const baseMenuStyle = {
    color: "#b3e5fc",
    fontSize: "14px",
    fontWeight: "400",
    margin: "0",
    padding: "8px 0",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const activeMenuStyle = {
    ...baseMenuStyle,
    color: "#ffffff",
    fontWeight: "500",
    borderBottom: "2px solid #2196f3"
  };

  const profileStyle = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "all 0.3s ease"
  };

  const avatarStyle = {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "600",
    fontSize: "12px"
  };

  const usernameStyle = {
    color: "#e3f2fd",
    fontWeight: "500",
    fontSize: "14px",
    margin: "0"
  };

  return (
    <div className="menu-container" style={containerStyle}>
      <Link 
        to="/" 
        style={{ textDecoration: "none" }}
        onClick={() => setSelectedMenu(-1)} // Reset menu selection
      >
        <h2 className="text-primary mt-2" style={{ margin: 0, cursor: "pointer" }}>
          Zerodha
        </h2>
      </Link>

      <div className="menus" style={menusStyle}>
        <ul style={menuListStyle}>
          {/* home */}
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(5)}
            >
              <p style={selectedMenu === 5 ? activeMenuStyle : baseMenuStyle}>
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"  // Changed from "/"
              onClick={() => handleMenuClick(0)}
            >
              <p style={selectedMenu === 0 ? activeMenuStyle : baseMenuStyle}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"  // Changed from "/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p style={selectedMenu === 1 ? activeMenuStyle : baseMenuStyle}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"  // Changed from "/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p style={selectedMenu === 2 ? activeMenuStyle : baseMenuStyle}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"  // Changed from "/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p style={selectedMenu === 3 ? activeMenuStyle : baseMenuStyle}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"  // Changed from "/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p style={selectedMenu === 4 ? activeMenuStyle : baseMenuStyle}>
                Funds
              </p>
            </Link>
          </li>
        </ul>
        
        <div 
          className="profile" 
          style={profileStyle}
          onClick={handleProfileClick}
        >
          <div className="avatar" style={avatarStyle}>ZU</div>
          <p className="username" style={usernameStyle}>USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu; 