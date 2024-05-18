import { useState } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { storetokenInLs } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_Data = await response.json();
      console.log("Res from server:", res_Data);

      if (response.ok) {
        storetokenInLs(res_Data.token);
        toast.success("Registration successful");
        navigate("/");
        setUser({ username: "", email: "", phone: "", password: "" });
      } else {
        toast.error(res_Data.extraDetails ? res_Data.extraDetails : res_Data.message);
      }
    } catch (e) {
      console.log("Error Occurred: " + e.message);
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
                  src="https://www.dhani.com/services/wp-content/uploads/2021/03/no-emi-bnr-forground.png"
                  alt="a girl is trying to do registration"
                  width="400"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <form action="" onSubmit={handleSubmit}>
                  <h1 className="main-heading mb-3">Registration form</h1>
                  <br />
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
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
                      placeholder="Enter your email"
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
                      placeholder="Phone"
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
                      placeholder="Password"
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
