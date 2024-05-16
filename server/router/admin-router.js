const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById
} = require("../controllers/admin-controller");

//first it will check whether user is logged in and if so check whether it is admin and then get all users data
router.route("/users").get(authMiddleware, adminMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, adminMiddleware, getAllContacts);
//we have to export no matter whether we are using it or not

//route for editing single user
router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, getUserById);
//route for deleting user
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUserById);

//route for updating user
router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, updateUserById);

  //route for deleting contact data
  router
  .route("/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteContactById);
module.exports = router;
