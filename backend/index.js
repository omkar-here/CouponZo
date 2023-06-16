if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

const path= require("path");
const crypto= require("crypto");
const express=require("express");
const app=express();
const cors=require("cors");
const {urlencoded}=require("body-parser");
const bodyParser=require("body-parser");
const passport=require("passport");
const userRoutes = require("./routes/User");
const localpassport=require("passport-local");
const User= require("./models/User");
const MongoStore = require("connect-mongo");
const session = require('express-session');
const flash = require("connect-flash");
app.use(
    cors(
        {
            origin: "*",
        }
    )
)
app.use(express.json());
app.use(bodyParser.json());
var jsonParser=bodyParser.json();
app.use(express.urlencoded({extended:true}));

const dbUrl= process.env.ATLAS;
const secret = process.env.SECRET || "thisshouldbeabettersecret";
const store = new MongoStore({
    mongoUrl:dbUrl,
    secret,
    touchAfter:24*60*60,
})
store.on("error", function(e){
    console.lof("Session Store Error",e);
});

const sessionConfig = {
    store,
    secret,
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires:Date.now()+1000*60*60*24*7,
        maxAge: 1000*60*60*24*7,
    }
};

app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localpassport(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
})

app.use(express.static(__dirname+"/public"));
app.use("/", userRoutes);
module.exports = app;
