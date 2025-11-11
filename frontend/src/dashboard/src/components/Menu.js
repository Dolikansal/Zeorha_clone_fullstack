import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const { user, isLoaded } = useUser();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/orders')) setSelectedMenu(1);
    else if (path.includes('/holdings')) setSelectedMenu(2);
    else if (path.includes('/positions')) setSelectedMenu(3);
    else if (path.includes('/funds')) setSelectedMenu(4);
    else setSelectedMenu(0); 
  }, [location]);

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
    marginLeft : "235px"
  };

  const baseMenuStyle = {
    color: "#b3e5fc",
    fontSize: "14px",
    fontWeight: "400",
    margin: "0",
    padding: "8px 0",
    transition: "all 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
    display: "block"
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
    gap: "15px"
  };

  if (!isLoaded) {
    return (
      <div style={containerStyle}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="menu-container" style={containerStyle}>
      <div className="menus" style={menusStyle}>
        <ul style={menuListStyle}>
          <li>
            <Link to="/dashboard" style={selectedMenu === 0 ? activeMenuStyle : baseMenuStyle}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" style={selectedMenu === 1 ? activeMenuStyle : baseMenuStyle}>
              Orders
            </Link>
          </li>
          <li>
            <Link to="/dashboard/holdings" style={selectedMenu === 2 ? activeMenuStyle : baseMenuStyle}>
              Holdings
            </Link>
          </li>
          <li>
            <Link to="/dashboard/positions" style={selectedMenu === 3 ? activeMenuStyle : baseMenuStyle}>
              Positions
            </Link>
          </li>
          <li>
            <Link to="/dashboard/funds" style={selectedMenu === 4 ? activeMenuStyle : baseMenuStyle}>
              Funds
            </Link>
          </li>
        </ul>
        
        <div className="profile" style={profileStyle}>
          <span style={{ color: "#e3f2fd", fontWeight: "500", fontSize: "14px" }}>
            Welcome, {user?.firstName || 'Trader'}
          </span>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Menu;