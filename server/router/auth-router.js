const express= require("express");
const router=express.Router();
const authcontroller=require("../controllers/auth-controller")
const {signupSchema,loginSchema}=require("../validators/auth-validator")


const validate=require("../middleware/validate-middleware")
const authMiddleware=require("../middleware/authMiddleware")
router.route("/").get(authcontroller.home);

//it will first validate then move to register code
router
  .route("/register")
  .post(validate(signupSchema),authcontroller.register);

  router.route("/login").post(validate(loginSchema),authcontroller.login);

  router.route("/user").get(authMiddleware,authcontroller.user);

module.exports =router;