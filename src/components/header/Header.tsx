import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container" data-testid="container">
      <div className="header-list">
      </div>
      <ul>
        <li>
          <Link to="/home">
            <div className="header-contnet">Home</div>
          </Link>
        </li>
        <li>
          <Link to="/news">
            <div className="header-contnet">News</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
