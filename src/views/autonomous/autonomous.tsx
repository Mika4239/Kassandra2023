import ChangeGP from "../../components/changeGP/changeGP.js";
import CheckMobility from "../../components/checkMobility/checkMobility.js";
import ChoosePosition from "../../components/choosePosition/choosePosition.js";
import NavBar from "../../components/navBar/navBar.js";
import NavButtons from "../../components/navButtons/navButtons.js";
import useStyles from "./autonomousStyles.js";

const CONES = "cones";
const CUBES = "cubes";

const AUTONOMOUS = "autonomous";

const PREV_PATH = "select";
const NEXT_PATH = "teleop";

const Autonomous: React.FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.autonomousPage}>
        <h1 className={classes.title}>{AUTONOMOUS}</h1>
        <CheckMobility />
        <div className={classes.changeGp}>
          <ChangeGP gp={CONES} period={AUTONOMOUS} />
          <ChangeGP gp={CUBES} period={AUTONOMOUS} />
        </div>
        <ChoosePosition period={AUTONOMOUS} />
        <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Autonomous;
