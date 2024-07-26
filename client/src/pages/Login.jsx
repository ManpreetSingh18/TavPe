import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { baseUrl } from "../../Urls";

const URL = `${baseUrl}/api/auth/login`;

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLs } = useAuth();
  const [loading, setLoading] = useState(false);


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
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

        toast.success("Login successful");
        setUser({ email: "", password: "" });

        //console.log(res_Data);
        navigate("/");
      } else {
        toast.error(
          res_Data.extraDetails ? res_Data.extraDetails : res_Data.message
        );
      }
    } catch (e) {
      console.log("Error Occured: " + e.message);
    }finally{
      setLoading(false); // Start loading
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
                  src="https://public-assets.prod.navi-tech.in/navi-website-assests/images/calculators-landing-page/CI.svg"
                  alt="a girl is trying to do Login"
                  width="400"
                  height="500"
                />
              </div>
              {/* let tackle Login form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
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
                    <button
                      type="submit"
                      className="btn btn-submit"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                    <br />
                    <p>
                      Don't have an account?{" "}
                      <a href="/register">Register here</a>
                    </p>
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
