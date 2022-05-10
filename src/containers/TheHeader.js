import React from "react";
import { NavLink } from 'react-router-dom';


const TheHeader = () => {
  return (
    <nav>
      <NavLink className="color" to='/'>home</NavLink>
      <NavLink className="color" to='about'>About</NavLink>
      <NavLink className="color" to='profile'>Profile</NavLink>
    </nav>
  );
};

export default TheHeader;
