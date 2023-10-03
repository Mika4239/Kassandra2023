import ChoosePosition from "../../components/choosePosition/choosePosition";
import Comments from "../../components/comments/comments";
import NavBar from "../../components/navBar/navBar";
import NavButtons from "../../components/navButtons/navButtons";
import useStyles from "./endgameStyles";

const ENDGAME = "endgame";

const PREV_PATH = "teleop";
const NEXT_PATH = "select";

const Endgame = () => {
  const { classes } = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.endgamePage}>
        <h1 className={classes.title}>{ENDGAME}</h1>
        <ChoosePosition period={ENDGAME} />
        <Comments />
        <NavButtons prevPath={PREV_PATH} nextPath={NEXT_PATH} />
      </div>
    </>
  );
};

export default Endgame;
