import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

const NavItem = ({ to, label }) => {
  return (
    <NavLink 
      to={to} 
      className="text-white px-4 py-2 rounded transition duration-300 hover:bg-white hover:text-black"
    >
      {label}
    </NavLink>
  );
};

function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <div>
        <img src={logo} alt="NaviGator AMS Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6">
        <NavItem to="/" label="Home" />
        <NavItem to="/team" label="Team" />
        <NavItem to="/vehicle" label="Vehicle" />
        <NavItem to="/sponsors" label="Sponsors" />
        <NavItem to="/photos" label="Photos" />
      </ul>
    </nav>
  );
}

export default Navbar;
