const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    //console.log(users)
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

//GET ALL CONTACTS LOGIC
const getAllContacts = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    if (!contact || contact.length === 0) {
      return res.status(404).json({ message: "No Contacts found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

/*----------------------------------------*/
/*---------User Delete Logic--------------*/
/*----------------------------------------*/
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

/*----------------------------------------*/
/*------------Getting detail of user on which edit click-------------*/
/*----------------------------------------*/
const getUserById = async (req,res,next) => {
  try {
    const id = req.params.id;
    const data=await User.findOne({_id:id},{password:0});
    
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById };
