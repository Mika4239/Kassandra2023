interface MatchData {
    id: string;
    user: string;
    match: string;
    team: string;
    autonomous: string;
    teleop: string;
    endgame: string;
    comments: string;
    createdAt: string;
    updatedAt: string;
};


export interface MatchDataList {
    listMatchData: {
        items: MatchData[];
    };
};