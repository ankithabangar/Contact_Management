const express = require("express");
import { errorHandler } from "./middleware/errorHandler";
const dotenv = require("dotenv").config();
import { connectDb } from "./config/dbConnection";
// import userRoutes from "./routes/userRoutes";

connectDb();
const app = express();

//Middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
