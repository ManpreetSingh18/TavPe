import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {useAuth} from "../store/auth"
import {  toast } from 'react-toastify';
import { baseUrl } from "../../Urls";
export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params=useParams();
  const {authorizationToken}=useAuth();
  //get single user data
  const getSingleUserData = async (id,error) => {
    try {
      const response = await fetch(
        `${baseUrl}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data=await response.json();
      console.log(`Admin update user: ${data}`)

      setData(data);
    //   if (response.ok) {
    //     getAllUsersData();
    //   }
    } 
    catch (error) {
      console.log(error);
      next(error)
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name=e.target.name;
    let value=e.target.value;
    setData({
     ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseUrl}/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Updated successfully")
      }else{
        toast.error("Unsuccessful update")
      }
    } catch (error) {
      console.log(error);
      next(error)
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        {/* Admin user edit  page main  */}
        <div className="container grid grid-two-cols">
          {/*Admin user edit  content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Mobile</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};
