const executeQuery = require("../graphql/graphqlClient");
const queries = require("../graphql/team/queries");
const mutations = require("../graphql/team/mutations");
const logger = require("../utils/logger");

module.exports.getAllTeams = async () => {
  const response = await executeQuery(queries.getAllTeams);
  return response ? response["listTeams"]["items"] : [];
};

module.exports.addTeam = async (data) => {
  const response = await executeQuery(mutations.createTeam, data);
  logger.info("created team: " + response["createTeam"]["id"]);
  return response;
};
