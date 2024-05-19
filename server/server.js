require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const cors = require("cors");

// Allow requests from specified origins
const corsOptions = {
  origin: "https://tav-prasad.vercel.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Use the CORS middleware with the specified options
app.use(cors(corsOptions));

// Parse JSON bodies
app.use(express.json());

// Mount the routers
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Error handling middleware
app.use(errorMiddleware);

// Connect to the database and start the server
const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not specified in the environment variables

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
