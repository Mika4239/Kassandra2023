import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
    selectPage: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default useStyles;