import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    bar: {
        width: '100vw',
        height: '100px',
        backgroundColor: '#ff9c34',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: 'Helvetica'
    },
    navLink: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '30px',
        fontWeight: 'bold'
    }
});

export default useStyles;