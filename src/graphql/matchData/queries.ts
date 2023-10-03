export const AllMatchData = `
query listMatchData {
    listMatchData {
        items {
            id
            createdAt
            user
            event
            match
            team
            autonomous
            teleop
            endgame
            comments
        }
    }
}
  
`;