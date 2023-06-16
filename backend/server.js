const app = require("./index");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(process.env.ATLAS);
const db = mongoose.connection;


  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("Database Connected");
  });

app.get("/", (req, res) => {
  res.render("<h1>Hello world</h1>")
  console.log("request");
});

app.listen(3001, (req, res) => {
  console.log("Listening to the server");
});
