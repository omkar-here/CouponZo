const jwt = require("jsonwebtoken");
const verify = (req, res) => {
  try {
    // console.log(req.cookies)
    const token = req.cookies.jwt;

    //check json web token exists & is verified
    if (token) {
      jwt.verify(token, "couponzo secret key", (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          console.log("error");
          res.status(401).json({ message: "No cookies" });
        } else {
          console.log("no cookies");
          console.log(decodedToken);
          decodedToken
            ? res.json(decodedToken)
            : res.json({ message: "No cookies" });
        }
      });
    } else {
      res.status(401);
      res.json({ message: "No cookies" });
      console.log("error");
    }
  } catch (err) {
    console.log(err);
    console.log("error");
  }
};
module.exports = { verify };
