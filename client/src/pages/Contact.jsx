import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { baseUrl } from "../../Urls";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../components/firebase/setup";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    profession: "",
    companyName: "",
    salary: "",
    annualIncome: "",
    loanAmount: "",
    loanType: "",
  });
  const [userData, setUserData] = useState(true);
  const [phone, setPhone] = useState("");
  const [otpUser, setOtpUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false); // State to track OTP verification

  const { user } = useAuth();

  const sentOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setOtpUser(confirmation);
      toast.success("OTP sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const data = await otpUser.confirm(otp);
      toast.success("OTP verified successfully");
      setOtpVerified(true);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to verify OTP");
    }
  };

  useEffect(() => {
    if (userData && user) {
      setContact((prevContact) => ({
        ...prevContact,
        username: user.username,
        email: user.email,
      }));
      setUserData(false);
    }
  }, [userData, user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpVerified) {
      toast.error("Please verify OTP before submitting the form");
      return;
    }

    const contactWithPhone = { ...contact, phone };

    try {
      const response = await fetch(`${baseUrl}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactWithPhone),
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Form submitted successfully.");
        setContact({
          username: "",
          email: "",
          phone: "",
          profession: "",
          companyName: "",
          salary: "",
          annualIncome: "",
          loanAmount: "",
          loanType: "",
        });
        setPhone("");
        setOtp("");
        setOtpVerified(false); // Reset OTP verification status
        
      } else {
        console.log("Error inside response", "error");
      }
    } catch (error) {
      console.log("Error Occurred: " + error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="https://www.moneytap.com/mt-home/images/hero-image.webp"
              alt="we are always ready to help"
            />
          </div>
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="contactNo">Contact No</label>
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={(phone) => setPhone("+" + phone)}
                />
                <button
                  type="button"
                  onClick={sentOtp}
                  style={{ marginRight: "10px", marginTop: "10px" }}
                >
                  Send Otp
                </button>
                <div id="recaptcha"></div>
                <br />
                <input
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  placeholder="Enter Otp"
                  value={otp} 
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  style={{ marginTop: "10px" }}
                >
                  Verify Otp
                </button>
                <input
                  type="hidden"
                  name="contactNo"
                  value={phone}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="profession">Profession</label>
                <select
                  name="profession"
                  id="profession"
                  value={contact.profession}
                  onChange={handleInput}
                  required
                >
                  <option value="">Select</option>
                  <option value="salaried">Salaried</option>
                  <option value="business">Business</option>
                </select>
              </div>
              {contact.profession === "salaried" && (
                <>
                  <div>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      autoComplete="off"
                      value={contact.companyName}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="salary">Salary</label>
                    <input
                      type="number"
                      name="salary"
                      id="salary"
                      autoComplete="off"
                      value={contact.salary}
                      onChange={handleInput}
                      required
                    />
                  </div>
                </>
              )}
              {contact.profession === "business" && (
                <div>
                  <label htmlFor="annualIncome">Annual Income</label>
                  <input
                    type="number"
                    name="annualIncome"
                    id="annualIncome"
                    autoComplete="off"
                    value={contact.annualIncome}
                    onChange={handleInput}
                    required
                  />
                </div>
              )}
              <div>
                <label htmlFor="loanAmount">Loan Amount Required</label>
                <input
                  type="number"
                  name="loanAmount"
                  id="loanAmount"
                  autoComplete="off"
                  value={contact.loanAmount}
                  onChange={handleInput}
                  required
                />
              </div>
              <div>
                <label htmlFor="loanType">Type of Loan</label>
                <select
                  name="loanType"
                  id="loanType"
                  value={contact.loanType}
                  onChange={handleInput}
                  required
                >
                  <option value="">Select</option>
                  <option value="personal loan">Personal Loan</option>
                  <option value="business/professional loan">
                    Business/Professional Loan
                  </option>
                  <option value="car loan">Car Loan</option>
                  <option value="home/property loan">Home/Property Loan</option>
                  <option value="health insurance">Health Insurance</option>
                  <option value="credit card">Credit Card</option>
                </select>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.228644744675!2d77.27068057495754!3d28.652871783157725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcbccf7bd899%3A0xf49976cff4de648f!2sLovely%20Associates.!5e0!3m2!1sen!2sin!4v1713638730227!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
