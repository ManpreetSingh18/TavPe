import { NavLink,Navigate, Outlet } from "react-router-dom";
import {  } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";

import { IoIosContact } from "react-icons/io";
import { MdHome } from "react-icons/md";

import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
  const {user,isLoading}=useAuth();
  
  if(isLoading ){
    return <div>Loading...</div>;
  }

  if(!user.isAdmin){
    return <Navigate to="/" />;
  }
  
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"> <FaUserAlt />users </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/admin/contacts"><IoIosContact /> contacts </NavLink>
              </li>
              <li>
                <NavLink to="/service"> <MdMiscellaneousServices />services </NavLink>
              </li>
              <li>
                <NavLink to="/"> <MdHome /> home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};
