export const checkUser = `
query checkUser($username: String!, $password: String!) {
    listUsers(filter: {username: {eq: $username}, password: {eq: $password}}) {
      items {
        id
        firstName
        lastName
        username
        password
        team
      }
    }
  }
`;

export const allUsersByTeam = `
query listUsersByTeam($team: String!) {
    listUsers(filter: {team: {eq: $team}}){
        items{
          id
        }
    }
}
`;