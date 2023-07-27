const { Schema, model } = require('mongoose');

const matchDataSchema = new Schema({
  match: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  autonomous: {
    mobility: {
      type: Boolean,
      required: true,
    },
    cones: {
      type: Number,
      required: true,
    },
    cubes: {
      type: Number,
      required: true,
    },
    links: {
      type: Number,
      Required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  teleop: {
    cones: {
      type: Number,
      required: true,
    },
    cubes: {
      type: Number,
      required: true,
    },
    links: {
      type: Number,
      Required: true,
    },
  },
  endgame: {
    position: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
  },
});

// 3. Create a Model.
const MatchData = model("matchData", matchDataSchema);

module.exports = MatchData;