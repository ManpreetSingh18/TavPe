const express= require("express");
const router=express.Router();
const authcontroller=require("../controllers/auth-controller")
const signupSchema=require("../validators/auth-validator")
const validate=require("../middleware/validate-middleware")

router.route("/").get(authcontroller.home);

//it will first validate then move to register code
router
  .route("/register")
  .post(validate(signupSchema),authcontroller.register);

  router.route("/login").post(authcontroller.login);


module.exports =router;