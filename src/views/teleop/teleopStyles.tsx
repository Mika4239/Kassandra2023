import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    teleopPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center',
        fontFamily: 'Helvetica'
    },
    title: {
        fontSize: '50px',
        color: '#213547',
        textTransform: 'capitalize'
    },
    changeGp: {
        display: 'flex'
    }
});

export default useStyles;