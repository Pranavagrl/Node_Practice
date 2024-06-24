// Step1 : Import Mongoose Library
const mongoose = require("mongoose");

// Step2 : Define the MOngodb Connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// Step3 : Set up MongoDB Connections
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Step4 :  set the default Connection..
//Mongoose maintains a default connection object representing the the MongoDB  connection
const db = mongoose.connection;

// Step5 : define event listeners for database connection..
db.on("connected", () => {
  console.log("Connected to MongoDb Server");
});

db.on("error", () => {
  console.log("MongoDb Connection Error");
});

db.on("disconnected", () => {
  console.log("MongoDb Disconnected");
});

// Step6 : Export the Database connection

module.exports = db;
