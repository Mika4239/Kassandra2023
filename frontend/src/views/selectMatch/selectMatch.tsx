import { useEffect, useMemo, useState } from "react";
import SelectFromData from "../../components/selectFromData/selectFromData";
import useStyles from "./selectMatchStyles";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const SELECT_MATCH = 'Select Match';

const MATCH = 'match';
const TEAM = 'team';

const START = 'Start';
const NEXT_PATH = '/autonomous';

const SelectMatch: React.FC = () => {
    const { classes } = useStyles();

    const [matches, setMatches] = useState<string[]>([]);
    const [teams, setTeams] = useState<string[]>([]);

    const match = useAppSelector(state => state.matchData.match);

    const getData = async <T,>(url: string): Promise<T> => {
        const resp = await fetch(url, {
            headers: {
                'X-TBA-Auth-Key': 'YwrN3ZwfFtrn5XniP4zwpDpLCOiaC04rLlzuF0yC5MYEPPErbTHkXfUOptnl13WK' // TODO: find a way to add key with .env
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
    }, [match]);

    return (
        <div className={classes.selectPage}>
            <h1 className={classes.title}>{SELECT_MATCH}</h1>
            <SelectFromData 
                name={MATCH}
                data={matches}
            />
            <SelectFromData 
                name={TEAM}
                data={teams}
            />
            <NavLink to={NEXT_PATH}>
                <Button variant="contained">
                    {START}
                </Button>
            </NavLink>
        </div>
    );
};

export default SelectMatch;