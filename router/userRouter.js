const express = require("express");
const {
  getUsers,
  getUser,
  deleteUser,
  signInUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/user").get(getUsers);
router.route("/user/signin").post(signInUser);
router.route("/user/:id").get(getUser).delete(deleteUser);

module.exports = router;
