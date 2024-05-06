import { useState } from "react";
import {useAuth} from "../store/auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  // handling the input values
  const handleInput = (e) => {
    //console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const {storetokenInLs}=useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user);
    //alert(user);
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      //console.log("Response:", response);
      const res_Data = await response.json();
      console.log("Res from server:", res_Data);

      if (response.ok) {
        
        storetokenInLs(res_Data.token);

        
        alert("registration successful");
        navigate("/");
        setUser({ username: "", email: "", phone: "", password: "" });
       
      } else {
        alert(res_Data.extraDetails ? res_Data.extraDetails:res_Data.message);
      }
    } catch (e) {
      console.log("Error Occured: " + e.message);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="https://media.istockphoto.com/id/1339464766/photo/finishing-job-remotely-from-home.jpg?s=612x612&w=is&k=20&c=3naV9A4ZHy3j7pkvxpAJspTDVsMpnCougtsI4yAi8lg="
                  alt="a girl is trying to do registration"
                  width="400"
                  height="500"
                />
              </div>
              {/* let tackle registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter youremail"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <br />
                    <button type="submit" className="btn btn-submit">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
