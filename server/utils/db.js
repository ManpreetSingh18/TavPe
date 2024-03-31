const mongoose=require("mongoose")

//const URI="mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URI)
///password mongo-bB5nMT9HBceQmol0
const URI=process.env.MONGODB_URI;
const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
         console.log("connection succesful to DB")
    }catch(error){
        console.log("Database connection failed",error)
        process.exit(0);
    }
}

module.exports=connectDb;