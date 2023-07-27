import ChangeGP from "../../components/changeGP/changeGP";
import CheckMobility from "../../components/checkMobility/checkMobility";
import ChoosePosition from "../../components/choosePosition/choosePosition";
import useStyles from "./autonomousStyles";

const CONES = 'cones';
const CUBES = 'cubes';
const LINKS = 'links';

const AUTONOMOUS = 'autonomous';

const Autonomous: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.autonomousPage}>
            <h1 className={classes.title}>{AUTONOMOUS}</h1>
            <CheckMobility />
            <ChangeGP gp={CONES}/>
            <ChangeGP gp={CUBES}/>
            <ChangeGP gp={LINKS}/>
            <ChoosePosition period={AUTONOMOUS} />
        </div>
    );
};

export default Autonomous;