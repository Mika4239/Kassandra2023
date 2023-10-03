export const getAllTeams = `
query AllTeams {
    listTeams {
      items {
        id
        name
        number
        description
        image
        admin
      }
    }
  }
`;