export const createMatchData = `
mutation MyMutation($user: String!, $match: String!, $team: String!, $autonomous: AWSJSON!, $teleop: AWSJSON!, $endgame: AWSJSON!, $comments: String = "") {
    createMatchData(input: {user: $user, match: $match, team: $team, autonomous: $autonomous, teleop: $teleop, endgame: $endgame, comments: $comments}){
        id
    }
}
`;