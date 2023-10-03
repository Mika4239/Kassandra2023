import { TextField } from "@mui/material";
import useStyles from "./commetsStyles.js";
import { useAppSelector } from "../../redux/hooks.js";
import { useDispatch } from "react-redux";
import { setComments } from "../../redux/matchDataSlice.js";

const COMMENTS = 'comments';

const Comments = () => {
    const { classes } = useStyles();

    const comments = useAppSelector(state => state.matchData.endgame.comments);
    const dispatch = useDispatch();

    return (
        <>
            <h2 className={classes.title}>{COMMENTS}</h2>
            <TextField 
                label={COMMENTS}
                multiline
                value={comments}
                onChange={(event) => dispatch(setComments(event.target.value))}
            />
        </>
    );
};

export default Comments;