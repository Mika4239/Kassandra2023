const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  admin: [
    {
      type: String,
      required: true,
    },
  ],
});

// 3. Create a Model.
const Team = model("team", teamSchema);

module.exports = Team;
