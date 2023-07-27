interface Match {
    key: string;
    alliances: {
        red: {
            team_keys: string[]
        },
        blue: {
            team_keys: string[]
        }
    }
}