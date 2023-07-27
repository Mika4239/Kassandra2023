import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    autonomousPage: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547'
    }
});

export default useStyles;