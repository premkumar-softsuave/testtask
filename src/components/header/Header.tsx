import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
          <Link className="menu-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/news">
            News
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
