

import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./myAccount.css";
import ProfileSection from './ProfileSection';
import Orders from "./Sidebar/Orders";
import Downloads from "./Sidebar/Downloads";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // Default to 'dashboard'

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <ProfileSection />;
      case 'orders':
        return < Orders/> ;
      case 'downloads':
        return <Downloads/>;
      case 'addresses':
        return <div>Addresses Section</div>;
      case 'accountDetails':
        return <div>Account Details Section</div>;
      default:
        return <div>Logout Section</div>;
    }
  };

  return (
    <Box className="myAccount-container">
      {/* Header Section */}
      <div className="myAccount-header">
        <Typography variant="h5" className="header-title">
          STELLAR CLASSES
        </Typography>
        <Typography variant="h2" className="header-subtitle">
          My Account
        </Typography>
      </div>

      {/* Main Grid Layout */}
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <div className="sidebar">
            <ul className="sidebar-list">
              <li
                className={`sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveSection('dashboard')}
              >
                Dashboard
              </li>
              <li
                className={`sidebar-item ${activeSection === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveSection('orders')}
              >
                Orders
              </li>
              <li
                className={`sidebar-item ${activeSection === 'downloads' ? 'active' : ''}`}
                onClick={() => setActiveSection('downloads')}
              >
                Downloads
              </li>
              <li
                className={`sidebar-item ${activeSection === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveSection('addresses')}
              >
                Addresses
              </li>
              <li
                className={`sidebar-item ${activeSection === 'accountDetails' ? 'active' : ''}`}
                onClick={() => setActiveSection('accountDetails')}
              >
                Account Details
              </li>
              <li
                className={`sidebar-item ${activeSection === 'logout' ? 'active' : ''}`}
                onClick={() => setActiveSection('logout')}
              >
                Logout
              </li>
            </ul>
          </div>
        </Grid>

        {/* Content Area */}
        <Grid item xs={12} md={9}>
          <div className="content-area">
            <Typography variant="h5" className="content-title">
              Hello Sourabh Waghamode (not Sourabh Waghamode? <span className="link">Log out</span>)
            </Typography>
            <Typography variant="body2" className="content-info">
              From your account dashboard, you can view your{" "}
              <span className="link">recent orders</span>, manage your{" "}
              <span className="link">shipping and billing addresses</span>, and edit your{" "}
              <span className="link">password and account details</span>.
            </Typography>
          </div>

          {/* Render Dashboard or Other Content */}
          <div style={{ marginTop: "20px" }}>
            {renderContent()}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyAccount;

