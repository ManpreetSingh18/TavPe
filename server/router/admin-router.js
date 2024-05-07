const express=require("express")
const router=express.Router();

const getAllUsers=require("../controllers/admin-controller");

router.route('/users').get(getAllUsers);

//we have to export no matter whether we are using it or not

module.exports=router;