const MatchData = require("../schemas/matchData");
const userController = require("./userController");

const POSITIONS = ["NONE", "DOCKED", "ENGAGED", "PARK"];

module.exports.getAllData = async (team) => {
  const teamUsers = await userController.getAllUsersByTeam(team);
  return await MatchData.find({ user: teamUsers });
};

module.exports.getKeys = () => {
  const keys = [];
  MatchData.schema.eachPath((path) => {
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

module.exports.getMobility = async (team) => {
  const teamUsers = (await userController.getAllUsersByTeam(team)).map(id => id.toString());
  return await MatchData.aggregate([
    {
      $match: {
        $and: [
          {
            user: {
              $elemMatch: {
                $in: teamUsers,
              },
            },
          },
          {
            "autonomous.mobility": {
              $eq: true,
            },
          },
        ],
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

module.exports.getAverageData = async (data) => {
  const teamUsers = (await userController.getAllUsersByTeam(data.team)).map(id => id.toString());
  return await MatchData.aggregate([
    {
      $match: {
        user: {
          $in: teamUsers
        },
      },
    },
    {
      $group: {
        _id: "$team",
        number: {
          $avg: `$${data.path}`,
        },
      },
    },
  ]);
};

module.exports.getCount = async (data) => {
  const teamUsers = (await userController.getAllUsersByTeam(data.team)).map(id => id.toString());
  return await MatchData.aggregate([
    {
      $match: {
        $and: [
          {
            user: {
              $in: teamUsers,
            },
          },
          {
            [`${data.period}.position`]: {
              $eq: data.position,
            },
          },
        ],
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
  await matchData.save();

  return { success: matchData.id };
};
