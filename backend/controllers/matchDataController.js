const MatchData = require("../schemas/matchData");
const matchData = require("../schemas/matchData");

const POSITIONS = ["NONE", "DOCKED", "ENGAGED", "PARK"];

module.exports.getAllData = async () => {
  return await matchData.find({});
};

module.exports.getKeys = () => {
  const keys = [];
  matchData.schema.eachPath((path) => {
    if (path.includes(".") && !path.includes("comments")) {
      path.includes("position")
        ? POSITIONS.map((position) => {
            (position === "PARK" && path.includes("autonomous")) ||
              keys.push(path + "." + position);
          })
        : keys.push(path);
    }
  });

  return keys;
};

module.exports.getAverageData = async (path) => {
  return await matchData.aggregate([
    {
      $group: {
        _id: "$team",
        number: {
          $avg: `$${path}`,
        },
      },
    },
  ]);
};

module.exports.getCount = async (data) => {
  return await matchData.aggregate([
    {
      $match: {
        [`${data.period}.position`]: {
          $eq: data.position,
        },
      },
    },
    {
      $group: {
        _id: "$team",
        number: {
          $count: {},
        },
      },
    },
  ]);
};

module.exports.addMatchData = async (data) => {
  const matchData = new MatchData(data);
  matchData.save();

  return { success: matchData.id };
};
