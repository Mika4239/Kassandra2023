import CheckMobility from "../../components/checkMobility/checkMobility";
import useStyles from "./autonomousStyles";

const AUTONOMOUS = 'Autonomous';
const Autonomous: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.autonomousPage}>
            <h1 className={classes.title}>{AUTONOMOUS}</h1>
            <CheckMobility />
        </div>
    );
};

export default Autonomous;