const express = require("express");
import { errorHandler } from "./middleware/errorHandler";

const app = express();

//Middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
