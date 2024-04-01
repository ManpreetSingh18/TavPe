// //? In an Express.js application, a "controller" refers to a part of your code
// that is responsible for handling the application's logic. Controllers are
// typically used to process incoming requests, interact with models (data sources),
// and send responses back to clients. They help organize your application by
// separating concerns and following the MVC (Model-View-Controller) design pattern.

const express=require("express");
const router=express.Router();
const User=require("../models/user-model")
const bcrypt=require("bcryptjs");

//********************Home Logic ********************/
const home=async(req,res)=>{
    try{
        res.status(200);
        res.send("Welcome to world best merns seried TavPrasad.com using router");
    }catch(error){

    }
}

//****************Registration Logic *****************/
const register=async(req,res)=>{
    try{
        //console.log(req.body)
        const  {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"Email already exists"});
        }

        // const saltRound=10;
        // const hash_password=await bcrypt.hash(password,saltRound);

        const userCreated=await User.create({
            username,
            email,
            phone,
            password
        });


        res.status(201).json({
            msg:"Registration succesfull",
            token: await userCreated.generateToken(),
            userId:  userCreated._id.toString(),
        });
    }catch(error){
        res.status(500);
        res.send("Error occured in registration");
        console.log("Error from auth-controller",error)
    }
    
};

//-----------------------------
//** USER LOGIN Logic **/
//*---------------------------

const login =async function(req,res){
    try{
       
        const {email,password} = req.body;
        const userExist=await User.findOne({ email});
        //console.log(userExist);
        if(!userExist){
            return res.status(400).json({message:"Invalid Credetials"});
        }
        const isPasswordValid=await bcrypt.compare(password,userExist.password);

        if(isPasswordValid){
            res.status(200).json({
                msg:"Login succesfull",
                token: await userExist.generateToken(),
                userId:  userExist._id.toString(),
            });
        }else{
            res.status(401).json({message:"Invalid Email or Password"});
        }


    }catch(error){
        //res.status(500).json("Internal Server Error");
        next(error);
    }
}
module.exports={home,register,login};