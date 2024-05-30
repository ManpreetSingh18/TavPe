import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { AdminContacts } from "../pages/Admin-Contacts";

export const Navbar = () => {
  const { isLoggedIn,isAdmin } = useAuth();
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
              <li>
                <NavLink to="/Service" onClick={toggleMenu}>Personal Loan </NavLink>
              </li>
              
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

              { isAdmin
              ?
              (
                <li>
                   <NavLink 
              to="/admin/contacts" 
              style={{
              
                backgroundColor: '#800000', // Bootstrap primary color
                border: '3px solid ', // Border with a darker shade
                borderRadius: '5px',
                transition: 'background-color 0.3s ease',
                color: 'white',
                padding: '8px',
                margin: '10px',
                fontSize: '15px',
                fontWeight: 'bold',
              }}
              
            >
              Admin
            </NavLink>
                </li>
              )
              :(<>
              </>)

              }
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
