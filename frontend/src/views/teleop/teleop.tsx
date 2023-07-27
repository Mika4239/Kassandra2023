import ChangeGP from "../../components/changeGP/changeGP";
import NavButtons from "../../components/navButtons/navButtons";
import useStyles from "./teleopStyles";

const CONES = 'cones';
const CUBES = 'cubes';
const LINKS = 'links';

const TELEOP = 'Teleop';

const PREV_PATH = 'autonomous';
const NEXT_PATH = 'endgame';

const Teleop: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.teleopPage}>
            <h1 className={classes.title}>{TELEOP}</h1>
            <ChangeGP gp={CONES}/>
            <ChangeGP gp={CUBES}/>
            <ChangeGP gp={LINKS}/>
            <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
        </div>
    );
};

export default Teleop;