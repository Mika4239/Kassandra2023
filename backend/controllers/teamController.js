const Team = require("../schemas/team");

module.exports.getAllTeams = async () => {
  return await Team.find({});
};

module.exports.addTeam = async (data) => {
  const team = new Team(data);
  await team.save();

  return { success: team.id };
};
