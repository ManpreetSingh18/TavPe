const express=require("express")
const router=express.Router();

const {getAllUsers,getAllContacts}=require("../controllers/admin-controller");


router.route('/users').get(getAllUsers);
router.route('/contacts').get(getAllContacts);
//we have to export no matter whether we are using it or not

module.exports=router;