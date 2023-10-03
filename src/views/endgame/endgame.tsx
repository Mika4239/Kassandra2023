import ChoosePosition from "../../components/choosePosition/choosePosition.js";
import Comments from "../../components/comments/comments.js";
import NavBar from "../../components/navBar/navBar.js";
import NavButtons from "../../components/navButtons/navButtons.js";
import useStyles from "./endgameStyles.js";

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
