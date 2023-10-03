import { Checkbox } from "@mui/material";
import useStyles from "./checkMobilityStyles.js";
import { useAppSelector } from "../../redux/hooks.js";
import { useDispatch } from "react-redux";
import { setMobility } from "../../redux/matchDataSlice.js";

const MOBILITY = 'Mobility:';

const CheckMobility: React.FC = () => {
    const { classes } = useStyles();

    const mobility = useAppSelector(state => state.matchData.autonomous.mobility);
    const dispatch = useDispatch();

    return (
        <div className={classes.checkMobility}>
            <h2 className={classes.title}>{MOBILITY}</h2>
            <Checkbox  
                className={classes.checkbox}
                checked={mobility}
                onChange={(event) => dispatch(setMobility(event.target.checked))}
            />
        </div>
    );
};

export default CheckMobility;