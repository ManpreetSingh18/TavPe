import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth"; 
import {  toast } from 'react-toastify';
export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    contactNo: "",
    profession: "",
    companyName: "",
    salary: "",
    annualIncome: "",
    loanAmount: "",
    loanType: "", // Added loanType to state
  });
  const [userData, setUserData] = useState(true);

  // Fetching from DB
  const { user } = useAuth();

  // Logic for fetching data in contact form when user is already logged in
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

  // Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        toast.success("Successful");
        setContact({
          username: "",
          email: "",
          contactNo: "",
          profession: "",
          companyName: "",
          salary: "",
          annualIncome: "",
          loanAmount: "",
          loanType: "", // Reset loanType
        });
      } else {
        console.log("Error inside response", "error");
      }
    } catch (e) {
      console.log("Error Occurred: " + e.message);
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
            <img src="https://www.moneytap.com/mt-home/images/hero-image.webp" alt="we are always ready to help" />
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
                <input
                  type="text"
                  name="contactNo"
                  id="contactNo"
                  autoComplete="off"
                  value={contact.contactNo}
                  onChange={handleInput}
                  required
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
                  <option value="business/professional loan">Business/Professional Loan</option>
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
