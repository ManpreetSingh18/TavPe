import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {useAuth} from "../store/auth"

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
        `http://localhost:3000/api/admin/users/${params.id}`,
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

  const handleInput = () => {};

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
            <form>
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
