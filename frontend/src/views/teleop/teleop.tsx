import ChangeGP from "../../components/changeGP/changeGP";
import useStyles from "./teleopStyles";

const CONES = 'cones';
const CUBES = 'cubes';
const LINKS = 'links';

const TELEOP = 'Teleop';

const Teleop: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.teleopPage}>
            <h1 className={classes.title}>{TELEOP}</h1>
            <ChangeGP gp={CONES}/>
            <ChangeGP gp={CUBES}/>
            <ChangeGP gp={LINKS}/>
        </div>
    );
};

export default Teleop;