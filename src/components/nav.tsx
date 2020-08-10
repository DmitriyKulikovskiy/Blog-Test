import React from "react";
import "../styles/header.sass";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <div className="nav">
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navigation;
