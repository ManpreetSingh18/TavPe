const express=require("express")
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware");
const adminMiddleware=require("../middleware/admin-middleware");
const {getAllUsers,getAllContacts,deleteUserById}=require("../controllers/admin-controller");


//first it will check whether user is logged in and if so check whether it is admin and then get all users data
router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers);
router.route('/contacts' ).get(authMiddleware,adminMiddleware,getAllContacts);
//we have to export no matter whether we are using it or not

//route for deleting user
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,deleteUserById);

module.exports=router;