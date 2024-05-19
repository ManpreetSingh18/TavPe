const express = require("express");
const router = express.Router();
const cors = require("cors"); // Import the cors middleware
const contactForm = require("../controllers/contact-controller");

// Apply CORS middleware to the router
router.use(cors());

// Define route handler for POST request to /api/form/contact
router.post("/contact", contactForm);

module.exports = router;
