import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center">
      <div>
        <img src={logo} alt="NaviGator AMS Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/team" className="text-white">Team</Link></li>
        <li><Link to="/vehicle" className="text-white">Vehicle</Link></li>
        <li><Link to="/sponsors" className="text-white">Sponsors</Link></li>
        <li><Link to="/photos" className="text-white">Photos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
