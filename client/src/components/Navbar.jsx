import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Navbar.css";

export const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Close dropdown when toggling menu
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-md z-50 relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="logo-brand text-xl font-bold text-maroon">
            <NavLink to="/" onClick={closeMenu}>TavPe</NavLink>
          </div>
          <button
            className="hamburger md:hidden block text-3xl focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className={`md:flex items-center ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <li>
                <NavLink to="/" onClick={closeMenu} className="hover:text-maroon">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu} className="hover:text-maroon">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeloan" onClick={closeMenu} className="hover:text-maroon">
                  Home Loan
                </NavLink>
              </li>
              <li>
                <NavLink to="/personalloan" onClick={closeMenu} className="hover:text-maroon">
                  Personal Loan
                </NavLink>
              </li>

              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="dropdown-toggle hover:text-maroon focus:outline-none"
                >
                  More Loans{" "}
                  <span className={`caret ${isDropdownOpen ? "rotate-180" : ""}`}>&#9662;</span>
                </button>
                <ul className={`dropdown-menu absolute right-0 mt-2 bg-white shadow-md z-50 ${isDropdownOpen ? "block" : "hidden"}`}>
                  <li>
                    <NavLink to="/buisnessloan" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-gray-100">
                      Business Loan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/creditcard" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-gray-100">
                      Credit Card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/healthinsurance" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-gray-100">
                      Health Insurance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/carloan" onClick={closeMenu} className="block px-4 py-2 text-black hover:bg-gray-100">
                      Car Loan
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/emi" onClick={closeMenu} className="hover:text-maroon">
                  Calculate EMI
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" onClick={closeMenu} className="hover:text-maroon">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login" onClick={closeMenu} className="hover:text-maroon">
                    Login
                  </NavLink>
                </li>
              )}
              {isAdmin && (
                <li>
                  <NavLink to="/admin/contacts" className="bg-maroon text-maroon px-4 py-2 rounded-md transition duration-300 ease-in-out">
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
