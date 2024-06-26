const express = require("express");
const router = express.Router();
const cors = require("cors"); // Import the cors middleware
const contactForm = require("../controllers/contact-controller");

// Define CORS options
const corsOptions = {
  origin: ["http://localhost:5173","https://tavpe.vercel.app/","https://www.tavpe.com","https://www.tavpe.in/"] // Allow requests from this origin
};

// Apply CORS middleware to the router with specified options
router.use(cors(corsOptions));

// Define route handler for POST request to /api/form/contact
router.post("/contact", contactForm);

module.exports = router;
