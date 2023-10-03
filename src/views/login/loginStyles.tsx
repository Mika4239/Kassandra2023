import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    loginPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547'
    },
    signInput: {
        margin: '10px'
    },
    signButton: {
        margin: '20px'
    }
});

export default useStyles;