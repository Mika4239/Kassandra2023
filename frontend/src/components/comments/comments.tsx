import { TextField } from "@mui/material";
import useStyles from "./commetsStyles";

const COMMENTS = 'comments';

const Comments = () => {
    const { classes } = useStyles();

    return (
        <>
            <h2 className={classes.title}>{COMMENTS}</h2>
            <TextField 
                label={COMMENTS}
                multiline
            />
        </>
    );
};

export default Comments;