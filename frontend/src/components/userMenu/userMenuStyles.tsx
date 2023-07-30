import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    profile: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logout: {
        textDecoration: 'none',
        color: 'black'
    }
});

export default useStyles;