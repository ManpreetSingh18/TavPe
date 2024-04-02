const express=require("express");
const router=express.Router();
const contactForm=require("../controllers/contact-controller")
router.route("/contact").post(contactForm);
//router.route("/contact").post
module.exports=router;