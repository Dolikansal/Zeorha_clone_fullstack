import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


// Should return JSX, not use ReactDOM.render
const DashboardApp = () => {

  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !isSignedIn) {
      // If user is not signed in, redirect to signin
      navigate('/signin');
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>Redirecting to sign in...</div>;
  }

  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default DashboardApp;