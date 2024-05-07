const express=require("express")
const router=express.Router();
const authMiddleware=require("../middleware/auth-middleware");
const adminMiddleware=require("../middleware/admin-middleware");
const {getAllUsers,getAllContacts}=require("../controllers/admin-controller");


router.route('/users').get(authMiddleware,adminMiddleware,getAllUsers);
router.route('/contacts' ).get(authMiddleware,adminMiddleware,getAllContacts);
//we have to export no matter whether we are using it or not

module.exports=router;