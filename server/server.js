require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./router/auth-router");
const connectDb=require("./utils/db");
app.use(express.json());

//Mount the router:To use the router in your main Express App
// you can mount it at a specific URL prefix
app.use("/api/auth",router);
//after above code it will jump to auth-router and will not see below



const PORT=3000;

//agar connection DB se ho tab hi age connect kare
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port: ${PORT}`);
    })
});


