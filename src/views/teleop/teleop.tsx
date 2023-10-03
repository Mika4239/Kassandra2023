import ChangeGP from "../../components/changeGP/changeGP.js";
import NavBar from "../../components/navBar/navBar.js";
import NavButtons from "../../components/navButtons/navButtons.js";
import useStyles from "./teleopStyles.js";

const CONES = "cones";
const CUBES = "cubes";

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
        <div className={classes.changeGp}>
          <ChangeGP gp={CONES} period={TELEOP} />
          <ChangeGP gp={CUBES} period={TELEOP} />
        </div>
        <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Teleop;
