import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStyles from "./navButtonsStyles";
import { useAppSelector } from "../../redux/hooks";
import executeQuery from "../../graphql/graphqlClient";
import { createMatchData } from "../../graphql/matchData/mutations";

const BACK = 'Back';
const NEXT = 'Next';
const SUBMIT = 'Submit';

const SELECT_PATH = 'select';

const NavButtons: React.FC<NavButtonsProps> = (props) => {
    const { prevPath, nextPath } = props;
    const { classes } = useStyles();

    const isSubmit = nextPath === SELECT_PATH;

    const matchData = useAppSelector(state => state.matchData);

    const addMatch = () => {
        const matchDataDB = {
            ...matchData,
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
                <Button variant='contained' className={classes.button} onClick={() => isSubmit && addMatch()}>
                    {isSubmit ? SUBMIT : NEXT}
                </Button>
            </NavLink>
        </div>
    );
};

export default NavButtons;