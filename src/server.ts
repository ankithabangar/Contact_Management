const express = require("express");

const app = express();

//Middleware
app.use("/api/contacts", require("../routes/contactRoutes.ts"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
