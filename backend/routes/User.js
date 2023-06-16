const express = require("express");
const router = express.Router();
const users = require("../controllers/userController");
const passport = require("passport");

router.route("/register").get(users.display).post(users.register);
router.route("/test").get(users.test);
module.exports = router;
