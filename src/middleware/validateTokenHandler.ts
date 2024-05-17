import asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "Bangar123";

export const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (typeof authHeader === "string" && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err: any, decoded: any) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      console.log(decoded);
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token is missing");
    }
  }
});
