const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }
    // Check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and atleast 6 char long",
      });
    }
    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already in use",
      });
    }
    const hashedPassword = await hashPassword(password);
    // Create User in Database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              path: "/",
              httpOnly: true,
              expires: new Date(Date.now() + 1000 * 86400),
              sameSite: "none",
              secure: true,
            })
            .json(user);
        }
      );
    }
    if (!match) {
      return res.json({ error: "Passwords dont match" });
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Profile function
const getProfile = async (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const logoutUser = async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "User logged Out successfully" });
};

module.exports = { loginUser, registerUser, getProfile, logoutUser };
