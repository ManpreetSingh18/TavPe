import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:3000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLs } = useAuth();

  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(user);
    //alert(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
     // console.log("Login Form:", response);
     const res_Data = await response.json();
      if (response.ok) {
        
        storetokenInLs(res_Data.token);

        alert("Login successful");
        setUser({ email: "", password: "" });

        console.log(res_Data);
        navigate("/");
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
                  alt="a girl is trying to do Login"
                  width="400"
                  height="500"
                />
              </div>
              {/* let tackle Login form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
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
                      Login
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
