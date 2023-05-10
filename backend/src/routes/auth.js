const router = require("express").Router();
const User = require("../models/User");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

/*----- REGISTER -----*/
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PHASE
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

/*----- LOGIN -----*/
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Invalid Email!");
    const hashedPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PHASE
    );
    const originalPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
    const inputPassword = req.body.password;
    originalPassword !== inputPassword &&
      res.status(401).json("Invalid Password!");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(201).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
