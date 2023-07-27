import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStyles from "./navButtonsStyles";
import { useAppSelector } from "../../redux/hooks";
import axios from "../../axios";

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
        axios.post('/matchData', matchData);
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