import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    profile: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        display: 'flex'
    }
});

export default useStyles;