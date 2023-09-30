export const createUser = `
mutation createUser($firstName: String!, $lastName: String!, $username: String!, $password: String!, $team: String) {
    createUser(input: {firstName: $firstName, lastName: $lastName, username: $username, password: $password, team: $team}) {
        id
    }
}
`;