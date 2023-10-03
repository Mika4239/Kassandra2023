const { Schema, model } = require("mongoose");

const matchDataSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
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
      top: {
        type: Number,
        required: true,
      },
      middle: {
        type: Number,
        required: true,
      },
      bottom: {
        type: Number,
        required: true,
      },
    },
    cubes: {
      top: {
        type: Number,
        required: true,
      },
      middle: {
        type: Number,
        required: true,
      },
      bottom: {
        type: Number,
        required: true,
      },
    },
    position: {
      type: String,
      required: true,
    },
  },
  teleop: {
    cones: {
      top: {
        type: Number,
        required: true,
      },
      middle: {
        type: Number,
        required: true,
      },
      bottom: {
        type: Number,
        required: true,
      },
    },
    cubes: {
      top: {
        type: Number,
        required: true,
      },
      middle: {
        type: Number,
        required: true,
      },
      bottom: {
        type: Number,
        required: true,
      },
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

const MatchData = model("matchData", matchDataSchema);

module.exports = MatchData;
