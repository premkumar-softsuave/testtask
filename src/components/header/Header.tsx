import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { MemoizedSearch } from "../search/Search";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const searchSomething = (value: string) => {
    navigate(`?search=${value}`, {
      replace: true,
    });
  };

  return (
    <div className="header-container" data-testid="header-component">
      {pathname !== "/news" && (
        <div className="header-content">
          <MemoizedSearch searchSomething={searchSomething} />
        </div>
      )}
      <ul>
        <li>
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-item" to="/news">
            News
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
