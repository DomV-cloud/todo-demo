import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      {/* <NavLink to="/tasks">Tasks</NavLink>
      {" | "} */}
      <NavLink to="/tasks/tlk">Tasks TLK</NavLink>
    </nav>
  );
};

export default Header;
