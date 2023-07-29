const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  team: {
    type: String
  },
});

// 3. Create a Model.
const User = model("user", userSchema);

module.exports = User;
