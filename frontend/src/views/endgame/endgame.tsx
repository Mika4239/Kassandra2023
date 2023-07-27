import ChoosePosition from "../../components/choosePosition/choosePosition";
import Comments from "../../components/comments/comments";
import useStyles from "./endgameStyles";

const ENDGAME = 'endgame';

const Endgame = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.endgamePage}>
            <h1 className={classes.title}>{ENDGAME}</h1>
            <ChoosePosition period={ENDGAME}/>
            <Comments />
        </div>
    );
};

export default Endgame;