import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

import CurrentDateTime from "./CurrentDateTime";

function Navbar(props) {
  const { currentUser } = props;
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
      {currentUser && <span>Welcome {currentUser.full_name}</span>}

      <CurrentDateTime />
    </nav>
  );
}

export default Navbar;
