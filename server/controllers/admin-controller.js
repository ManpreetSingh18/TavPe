const User=require("../models/user-model");
const Contact=require("../models/contact-model");


const getAllUsers=async (req,res)=>{
    try{
        const users=await User.find({},{password:0});
        if(!users || users.length===0){
            return res.status(404).json({message:"No users found"});
            
        }
        return res.status(200).json(users);
    }
    catch(error){
        next(error)
    }
}

//GET ALL CONTACTS LOGIC
const getAllContacts=async (req,res)=>{
    try{
        const contact=await Contact.find();
        if(!contact || contact.length===0){
            return res.status(404).json({message:"No Contacts found"});
            
        }
        return res.status(200).json(contact);
    }
    catch(error){
        next(error)
    }

}
module.exports={getAllUsers,getAllContacts};