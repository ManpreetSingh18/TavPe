require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const app = express();

// CORS configuration
const allowedOrigins = ["https://tav-prasad.vercel.app", "http://localhost:5173","https://www.tavpe.com","https://www.tavpe.in/"];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Use the CORS middleware with the specified options
app.use(cors(corsOptions));

// Middleware to log and set CORS headers
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    console.log(`CORS header set for origin: ${origin}`);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

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
