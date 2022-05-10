import React from "react";
import { NavLink } from 'react-router-dom';


const TheHeader = () => {
  return (
    <nav>
      <NavLink className="color" to='/'>home</NavLink>
      <NavLink className="color" to='about'>About</NavLink>
      <NavLink className="color" to='profile'>Profile</NavLink>
      <NavLink className="color" to='login'>Login</NavLink>
      <NavLink className="color" to='register'>Register</NavLink>
      <NavLink className="color" to='none'>No Page</NavLink>
    </nav>
  );
};

export default TheHeader;
