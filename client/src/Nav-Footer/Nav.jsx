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
        <NavLink className="item" >About</NavLink>
        <NavLink className="item" >Projects</NavLink>
        <NavLink className="item" >Contact</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
