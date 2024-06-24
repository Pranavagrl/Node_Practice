const { uniq } = require("lodash");
const mongoose = require("mongoose");
const { type } = require("os");

// Define the person Schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: { type: Number },
  work: {
    type: [String],
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
  },
  salary: {
    type: Number,
    required: true,
  },
});

// Create Person Model
const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
