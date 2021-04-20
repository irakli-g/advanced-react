import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../redux/Root";
import * as actions from "../redux/actions/authActions";

interface Props {
  authenticated: boolean;
  authenticateUser: (value: boolean) => void;
}

const Header: React.FC<Props> = ({ authenticated, authenticateUser }) => {
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
      {authenticated ? (
        <button
          onClick={() => {
            authenticateUser(false);
          }}
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => {
            authenticateUser(true);
          }}
        >
          Sign in
        </button>
      )}
    </header>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, actions)(Header);
