import { useEffect, useMemo, useState } from "react";
import SelectFromData from "../../components/selectFromData/selectFromData";
import useStyles from "./selectMatchStyles";
import { Button } from "@mui/material";

const SELECT_MATCH = 'Select Match';

const MATCH = 'match';
const TEAM = 'team';

const START = 'Start';

const SelectMatch: React.FC = () => {
    const { classes } = useStyles();

    const [match, setMatch] = useState<string>('');
    const [team, setTeam] = useState<string>('');

    const [matches, setMatches] = useState<string[]>([]);
    const [teams, setTeams] = useState<string[]>([]);

    const getData = async <T,>(url: string): Promise<T> => {
        const resp = await fetch(url, {
            headers: {
                'X-TBA-Auth-Key': '' // TODO: find a way to add key with .env
            }
        });
        return resp.json();
    };

    useEffect(() => {
        getData<Match[]>('https://www.thebluealliance.com/api/v3/event/2023isde1/matches')
        .catch(error => console.log(error))
        .then((response) => response && setMatches(response.map((event) => event.key)));
    }, []);

    useMemo(() => {
        match !== '' && 
            getData<Match>(`https://www.thebluealliance.com/api/v3/match/${match}`)
            .catch(error => console.log(error))
            .then((response => response && setTeams(response.alliances.blue.team_keys.concat(response.alliances.red.team_keys))))
    }, [match])

    return (
        <div className={classes.selectPage}>
            <h1 className={classes.title}>{SELECT_MATCH}</h1>
            <SelectFromData 
                name={MATCH}
                data={matches}
                chosen={match}
                setChosen={setMatch}
            />
            <SelectFromData 
                name={TEAM}
                data={teams}
                chosen={team}
                setChosen={setTeam}
            />
            <Button variant="contained">
                {START}
            </Button>
        </div>
    );
};

export default SelectMatch;