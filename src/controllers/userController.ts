import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "Bangar123";

//@desc Register a user
//@route POST /api/users/register
//@access public

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      res.status(400);
      throw new Error("User already registered");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed pass: ", hashedPassword);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log("User created: ", user);
    if (user) {
      res.status(201).json({ _id: user.id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User data is not valid");
    }
    res.json({ message: "Register the user" });
  }
);

//@desc Login user
//@route POST /api/users/login
//@access public

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid!");
  }
});
("");
//@desc Current user info
//@route GET /api/users/current
//@access private

export const currentUser = asyncHandler((req: Request, res: Response) => {
  res.json(req.user);
});
