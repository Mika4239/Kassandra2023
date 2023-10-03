import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_GRAPHQL_URL;

const client = new GraphQLClient(endpoint, {
  headers: {
    "x-api-key": import.meta.env.VITE_GRAPHQL_API_KEY,
  },
});

const executeQuery = async <T,>(query: string, variables: Object = {}): Promise<T | null> => {
  try{
    return await client.request(query, {...variables});
  }
  catch(error) {
    console.log(`can't execute query: ${error} \nquery: ${query} \nvariables: ${variables}`);
    return null;
  }
};

export default executeQuery;
