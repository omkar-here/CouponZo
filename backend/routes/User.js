const express = require("express");
const router = express.Router();
const users = require("../controllers/authController");
router.route("/register").post(users.register);
router.route("/test").get(users.test);
router.route("/clear").delete(users.clear);
module.exports = router;
