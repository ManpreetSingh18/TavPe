import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <p>@TavPe 2024</p>
      <p>Jagatpuri, Delhi, India</p>
      {/* <p>Phone: +91 9873888336</p>  */}
      <p>
        Created By{" "}
        <a href="https://www.linkedin.com/in/themanpreetsingh/" className="creator-link">
          Manpreet Singh
        </a>
      </p>
    </footer>
  );
};
