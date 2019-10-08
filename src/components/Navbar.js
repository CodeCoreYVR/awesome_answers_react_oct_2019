import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

import CurrentDateTime from "./CurrentDateTime";

function Navbar(props) {
  const { currentUser, onSignOut } = props;
  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px"
      }}
    >
      {/* <a href="/questions">Questions</a> */}
      <NavLink to="/questions">Questions</NavLink>
      {!currentUser && <NavLink to="sign_in">Sign In</NavLink>}
      {currentUser && (
        <>
          <span>Welcome {currentUser.full_name}</span>
          <a href="#sign_out" onClick={handleSignOutClick}>
            Sign Out
          </a>
        </>
      )}

      <CurrentDateTime />
    </nav>
  );
}

export default Navbar;
