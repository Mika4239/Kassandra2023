import ChangeGP from "../../components/changeGP/changeGP";
import CheckMobility from "../../components/checkMobility/checkMobility";
import ChoosePosition from "../../components/choosePosition/choosePosition";
import NavBar from "../../components/navBar/navBar";
import NavButtons from "../../components/navButtons/navButtons";
import useStyles from "./autonomousStyles";

const CONES = "cones";
const CUBES = "cubes";
const LINKS = "links";

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
        <ChangeGP gp={CONES} period={AUTONOMOUS} />
        <ChangeGP gp={CUBES} period={AUTONOMOUS} />
        <ChangeGP gp={LINKS} period={AUTONOMOUS} />
        <ChoosePosition period={AUTONOMOUS} />
        <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Autonomous;
