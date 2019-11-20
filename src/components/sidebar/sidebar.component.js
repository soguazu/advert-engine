import React from "react";
import { Link } from "react-router-dom";
import Overview from "../../assets/Icon.svg";
import Brief from "../../assets/Icon _ Brief.svg";

import "./sidebar.styles.css";

const Sidebar = () => (
  <div className="sidebar">
    <div className="logo"></div>
    <div className="menu">
      <Link to="/" className="path">
        <Overview className="icon" />
        Overview
      </Link>
      <Link to="/" className="path active">
        <Brief className="icon" />
        Campaigns
      </Link>
    </div>
  </div>
);

export default Sidebar;
