export const createTeam = `
mutation createTeam($name: String!, $number: Int!, $image: String, $description: String, $admin: [String!]!) {
    createTeam(input: {name: $name, number: $number, description: $description, image: $image, admin: $admin}) {
      id
    }
  }
`;