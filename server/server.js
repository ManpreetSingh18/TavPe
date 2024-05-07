require("dotenv").config();
const express=require("express");
const app=express();
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");
const adminRoute=require("./router/admin-router");
const connectDb=require("./utils/db");
const errorMiddleware=require("./middleware/error-middleware");
const cors=require("cors");
// let tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());

//Mount the router:To use the router in your main Express App
// you can mount it at a specific URL prefix
app.use("/api/auth",authRoute);
//after above code it will jump to auth-router and will not see below

app.use("/api/form",contactRoute);
//it means  that if there error occured then we will not proceed with making connection in next code 
//s //app.use(errorMiddleware());
app.use(errorMiddleware);

//route for service
app.use("/api/data",serviceRoute);

//route for Admin
app.use("/api/admin",adminRoute);

const PORT=3000;

//agar connection DB se ho tab hi age connect kare
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    })
});


