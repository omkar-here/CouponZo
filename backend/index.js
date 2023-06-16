if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const path = require("path");
const crypto = require("crypto");
const express = require("express");
const app = express();
const cors = require("cors");
const { urlencoded } = require("body-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const userRoutes = require("./routes/User");

const MongoStore = require("connect-mongo");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.json());
var jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.ATLAS;
const secret = process.env.SECRET || "thisshouldbeabettersecret";
const store = new MongoStore({
  mongoUrl: dbUrl,
  secret,
  touchAfter: 24 * 60 * 60,
});
store.on("error", function (e) {
  console.lof("Session Store Error", e);
});

app.use(express.static(__dirname + "/public"));
app.use("/", userRoutes);
module.exports = app;
