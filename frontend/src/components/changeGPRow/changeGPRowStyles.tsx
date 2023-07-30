import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    title: {
        color: '#213547',
        fontSize: '20px ',
        textTransform: 'capitalize'
    },
    changeAmount: {
        display: 'flex'
    },
    inputBox: {
        maxWidth: '70px'
    }
});

export default useStyles;