import express, { Request, Response } from "express";
import {
  currentUser,
  loginUser,
  registerUser,
} from "../controllers/userController";

const router = express.Router();
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
