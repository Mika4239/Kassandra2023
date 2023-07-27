import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    positionRadio: {
        margin: '30px',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        alignItems: 'center'
    },
    label: {
        fontSize: '30px',
        color: '#213547',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
});

export default useStyles;