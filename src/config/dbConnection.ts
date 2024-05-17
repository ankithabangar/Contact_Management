const mongoose = require("mongoose");

export const connectDb = async () => {
  try {
    const CONNECTION_STRING =
      "mongodb+srv://ankithabangar:Ankitha2612*@ankithabangar.z56edrt.mongodb.net/mycontacts-backend?retryWrites=true&w=majority&appName=AnkithaBangar";
    console.log(CONNECTION_STRING);
    const connect = await mongoose.connect(CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1); //to exit
  }
};
