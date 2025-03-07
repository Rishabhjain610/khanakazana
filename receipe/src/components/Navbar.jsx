import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import khanakazana from '../assets/khanakazana.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-7 py-2 bg-white shadow-md z-50">
        {/* Logo */}
        <div>
          <img src={khanakazana} className="h-24 w-32 md:h-16 md:w-36" alt="Khana Kazana" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-x-8">
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/receipe">Recipe</NavLink>
          </li>
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/chatbot">Chatbot</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-md flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden`}
      >
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="absolute top-5 right-7">
          <FaTimes size={24} />
        </button>

        {/* Navigation Links */}
        <ul className="text-center flex flex-col">
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/receipe" onClick={() => setIsOpen(false)}>
              Recipe
            </NavLink>
          </li>
          <li className="text-[20px] hover:text-[#FFD700] text-black inline-flex items-center justify-center whitespace-nowrap font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-10 px-4 py-2 relative after:absolute after:bg-[#FFD700] after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            <NavLink to="/chatbot" onClick={() => setIsOpen(false)}>
              Chatbot
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;