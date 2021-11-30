import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { MemoizedSearch } from "../search/Search";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate ();

  const searchSomething = (value: string) => { 
    navigate(`?search=${value}`, {
      replace: true,
    })
    console.log('value', value)
  }

  return (
    <div className="header-container" data-testid="container">
      <div className="header-content">
        <MemoizedSearch searchSomething={searchSomething} />
      </div>
      <ul>
        <li>
          <Link to="/" >
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
