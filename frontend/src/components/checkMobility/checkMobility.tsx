import { Checkbox } from "@mui/material";
import useStyles from "./checkMobilityStyles";

const MOBILITY = 'Mobility:';

const CheckMobility: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.checkMobility}>
            <h2 className={classes.title}>{MOBILITY}</h2>
            <Checkbox className={classes.checkbox}/>
        </div>
    );
};

export default CheckMobility;