import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact>Home</NavLink>
      &ensp;
      <NavLink
        to="/movies"
        exact>Movies</NavLink>
      &ensp;
      <NavLink
        to="/directors"
        exact>Directors</NavLink>
      &ensp;
      <NavLink
        to="/actors"
        exact>Actors</NavLink>
    </div>
  );
};

export default NavBar;
