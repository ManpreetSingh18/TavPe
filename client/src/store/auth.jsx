import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { baseUrl } from "../../Urls";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  //storing the token in localStorage
  const authorizationToken=`Bearer ${token}`;
  //for services
  const [services,setServices] = useState([]);

  //LOGIN VIA server token
  const storetokenInLs = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  //console.log("isLoggedIn:",isLoggedIn)

  // tackling the logout functionality
  const LogoutUser = () => {
    setToken("");
    setIsAdmin(false);
    return localStorage.removeItem("token");
  };

  //JWT Authentication-to get the currently loggedIN user data


const userAuthentication = async () => {
  if (!token) {
    setIsLoading(false);
    //console.log("No token available, user is not logged in.");
    return;
  }
  try {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}/api/auth/user`, {
      method: "GET",
      headers: {
        Authorization: authorizationToken,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      setIsAdmin(responseData.userData["isAdmin"]);
      setUser(responseData.userData);
    } else if (response.status === 401) {
      // Handle unauthorized access
      // For example, redirect to login page or display an error message
      console.log("Unauthorized access. Redirecting to login page...");
    } else {
      // Handle other error responses
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    // Handle network errors
    console.error("Network Error:", error.message);
  } finally {
    setIsLoading(false);
  }
};


  //to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/data/service`, {
        method: "GET",
      });

      if(response.ok){
        const data=await response.json();
       // console.log(data.data);
        setServices(data.data);
        //console.log("service data",services)
      }
    } catch (error) {
        //next(error);
        console.log("Error in services:",error)
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
    
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storetokenInLs, LogoutUser, user ,services,authorizationToken,isLoading,isAdmin}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
