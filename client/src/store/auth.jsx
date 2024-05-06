import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  //storing the token in localStorage

  //for services
  const [services,setServices] = useState([]);

  const storetokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  //console.log("isLoggedIn:",isLoggedIn)

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication-to get the currently loggedIN user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        //console.log("User Data:", responseData.userData);
        setUser(responseData.userData);
      }
    } catch (error) {
      console.error("Error Fetching user data");
    }
  };
  //to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data/service", {
        method: "GET",
      });

      if(response.ok){
        const data=await response.json();
        console.log(data.data);
        setServices(data.data);
        console.log("service data",services)
      }
    } catch (e) {
        console.log("Error in services:",e)
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLs, LogoutUser, user ,services}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
