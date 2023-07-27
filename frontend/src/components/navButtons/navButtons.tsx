import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import useStyles from "./navButtonsStyles";

const BACK = 'Back';
const NEXT = 'Next';

const NavButtons: React.FC<NavButtonsProps> = (props) => {
    const { prevPath, nextPath } = props;
    const { classes } = useStyles();

    return (
        <div>
            <NavLink to={'/' + prevPath}>
                <Button variant='contained' className={classes.button}>
                    {BACK}
                </Button>
            </NavLink>
            <NavLink to={'/' + nextPath}>
                <Button variant='contained' className={classes.button}>
                    {NEXT}
                </Button>
            </NavLink>
        </div>
    );
};

export default NavButtons;