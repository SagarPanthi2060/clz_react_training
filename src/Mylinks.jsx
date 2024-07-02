import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Mylinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Navbar</div>
        <button
          className="text-white text-3xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'}`}>
          <NavLink exact to="/" activeClassName="bg-blue-500" className="block md:inline-block text-white py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="bg-blue-500" className="block md:inline-block text-white py-2 px-4 hover:bg-gray-700 rounded">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="bg-blue-500" className="block md:inline-block text-white py-2 px-4 hover:bg-gray-700 rounded">
            Contact
          </NavLink>
          <NavLink to="/product" activeClassName="bg-blue-500" className="block md:inline-block text-white py-2 px-4 hover:bg-gray-700 rounded">
            Product
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Mylinks;
