import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    dataPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547',
        margin: '40px'
    }
});

export default useStyles;