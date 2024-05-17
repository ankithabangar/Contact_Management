import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    res.json({ message: "Register the user" });
  }
);

//@desc Login user
//@route POST /api/users/login
//@access public

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Login user" });
});

//@desc Current user info
//@route GET /api/users/current
//@access public

export const currentUser = asyncHandler((req: Request, res: Response) => {
  res.json({ message: "Current user information" });
});
