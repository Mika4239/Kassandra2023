const graphql = require("graphql-request");
const logger = require("../utils/logger");
require("dotenv").config();

const endpoint = process.env.GRAPHQL_URL;

const client = new graphql.GraphQLClient(endpoint, {
  headers: {
    "x-api-key": process.env.GRAPHQL_API_KEY,
  },
});

const executeQuery = async (query, variables = {}) => {
  try{
    return await client.request(query, variables);
  }
  catch(error) {
    logger.error("can't execute query: " + error)
    return null;
  }
};

module.exports = executeQuery;
