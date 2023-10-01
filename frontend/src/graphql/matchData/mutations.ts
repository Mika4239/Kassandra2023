export const createMatchData = `
mutation MyMutation($user: String!, $event: String!, $match: String!, $team: String!, $autonomous: AWSJSON!, $teleop: AWSJSON!, $endgame: AWSJSON!, $comments: String = "") {
    createMatchData(input: {user: $user, event: $event, match: $match, team: $team, autonomous: $autonomous, teleop: $teleop, endgame: $endgame, comments: $comments}){
        id
    }
}
`;