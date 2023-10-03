export const createUser = `
mutation createUser($firstName: String!, $lastName: String!, $username: String!, $password: String!, $team: String) {
    createUser(input: {firstName: $firstName, lastName: $lastName, username: $username, password: $password, team: $team}) {
        id
    }
}
`;

export const updateUserTeam = `
mutation MyMutation($id: ID!, $team: String = "") {
    updateUser(input: {id: $id, team: $team}){
      id
    }
  }
`;