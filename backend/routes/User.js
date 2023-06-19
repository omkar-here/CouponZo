const express = require("express");
const router = express.Router();
const users = require("../controllers/authController");
router.route("/register").post(users.register);
router.route("/test").get(users.test);
// router.route("/clear").delete(users.clear);
router.route("/set-cookies").get(users.setCookies);
router.route("/read-cookies").get(users.readCookies);

module.exports = router;
