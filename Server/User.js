const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Corrected from `name` to `String`
      required: true,
    },
    email: {
      type: String, // Corrected from `email` to `String`
      required: true,
      unique: true,
    },
    password: {
      type: String, // Corrected from `password` to `String`
      required: true,
    },
  },
  { timestamps: true } // Corrected key from `timestamp` to `timestamps`
);




// Creating a model

const User = mongoose.model('User', userSchema); // Changed the name to `User` (uppercase for convention)

module.exports = User;
