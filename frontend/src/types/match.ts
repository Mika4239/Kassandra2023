interface Match {
    key: string;
    predicted_time: number;
    alliances: {
        red: {
            team_keys: string[]
        },
        blue: {
            team_keys: string[]
        }
    }
}