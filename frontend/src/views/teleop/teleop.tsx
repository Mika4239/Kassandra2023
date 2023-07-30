import ChangeGP from "../../components/changeGP/changeGP";
import NavBar from "../../components/navBar/navBar";
import NavButtons from "../../components/navButtons/navButtons";
import useStyles from "./teleopStyles";

const CONES = "cones";
const CUBES = "cubes";
const LINKS = "links";

const TELEOP = "teleop";

const PREV_PATH = "autonomous";
const NEXT_PATH = "endgame";

const Teleop: React.FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.teleopPage}>
        <h1 className={classes.title}>{TELEOP}</h1>
        <ChangeGP gp={CONES} period={TELEOP} />
        <ChangeGP gp={CUBES} period={TELEOP} />
        <ChangeGP gp={LINKS} period={TELEOP} />
        <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Teleop;
