import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    endgamePage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547'
    }
});

export default useStyles;