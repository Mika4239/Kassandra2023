import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStyles from "./navButtonsStyles.js";
import { useAppSelector } from "../../redux/hooks.js";
import executeQuery from "../../graphql/graphqlClient.js";
import { createMatchData } from "../../graphql/matchData/mutations.js";
import { translateMatch, translateTeam } from "../../utils/translations.js";
import { getTBAData } from "../../utils/general.js";

const BACK = 'Back';
const NEXT = 'Next';
const SUBMIT = 'Submit';

const SELECT_PATH = 'select';

const NavButtons: React.FC<NavButtonsProps> = (props) => {
    const { prevPath, nextPath } = props;
    const { classes } = useStyles();

    const isSubmit = nextPath === SELECT_PATH;

    const matchData = useAppSelector(state => state.matchData);

    const translateEvent = async (event: string) => {
        return await getTBAData<Event>(`https://www.thebluealliance.com/api/v3/event/${event}/simple`)
        .catch(error => console.log(error))
        .then(response => response ? response.name : "")
    };

    const addMatch = async () => {
        const matchDataDB = {
            ...matchData,
            "event": await translateEvent(matchData.event),
            "match": translateMatch(matchData.match),
            "team": translateTeam(matchData.team, matchData.teamIndex),
            "autonomous": JSON.stringify(matchData.autonomous),
            "teleop": JSON.stringify(matchData.teleop),
            "endgame": JSON.stringify(matchData.endgame)
        };

        executeQuery(createMatchData, matchDataDB);
    }

    return (
        <div>
            <NavLink to={'/' + prevPath}>
                <Button variant='contained' className={classes.button}>
                    {BACK}
                </Button>
            </NavLink>
            <NavLink to={'/' + nextPath}>
                <Button variant='contained' className={classes.button} onClick={async () => isSubmit && await addMatch()}>
                    {isSubmit ? SUBMIT : NEXT}
                </Button>
            </NavLink>
        </div>
    );
};

export default NavButtons;