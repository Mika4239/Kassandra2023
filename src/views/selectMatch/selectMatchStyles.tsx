import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    selectPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '70vh',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: '50px',
        color: '#213547'
    }
});

export default useStyles;