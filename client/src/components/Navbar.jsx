import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">TavPrasad</NavLink>
          </div>
          <button className="hamburger" aria-label="Toggle navigation" onClick={toggleMenu}>
            &#9776;
          </button>
          <nav className={isOpen ? "nav-open" : ""}>
            <ul>
              <li>
                <NavLink to="/" onClick={toggleMenu}>Home </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>About </NavLink>
              </li>
              {/* <li>
                <NavLink to="/Service" onClick={toggleMenu}>Services </NavLink>
              </li> */}
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>Contact </NavLink>
              </li>
              <li>
                <NavLink to="/emi" onClick={toggleMenu}>Calculate EMI </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" onClick={toggleMenu}>Logout </NavLink>
                </li>
              ) : (
                <>
                  {/* <li>
                    <NavLink to="/register" onClick={toggleMenu}>Register</NavLink>
                  </li> */}
                  <li>
                    <NavLink to="/login" onClick={toggleMenu}>Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
