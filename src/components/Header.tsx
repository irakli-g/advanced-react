import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
          <li style={{ margin: "0px 5px" }}>
            <Link to="/">List</Link>
          </li>
          <li style={{ margin: "0px 5px" }}>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
