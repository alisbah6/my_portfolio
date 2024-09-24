import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav-foot.css";
const Nav = () => {
  return (
    <div>
      <nav>
        <p className="my-name">Alisbah Zulfiqar</p>
        <NavLink
          className="item"
        
        >
          Home
        </NavLink>
        <NavLink className="item" to="/About" >About</NavLink>
        <NavLink className="item" to="/Project" >Projects</NavLink>
        <NavLink className="item" to="/Contact" >Contact</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
