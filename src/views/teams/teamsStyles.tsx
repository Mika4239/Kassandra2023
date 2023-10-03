import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    teamsPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547'
    },
    addGroup: {
        backgroundColor: '#ff9c34',
        ":hover": {
            backgroundColor: 'black'
        }
    },
    groupIcon: {
        margin: '10px'
    }
});

export default useStyles;