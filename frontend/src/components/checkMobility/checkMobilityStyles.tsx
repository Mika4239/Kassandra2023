import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    checkMobility: {
        display: 'flex'
    },
    title: {
        color: '#213547',
        fontSize: '30px'
    },
    checkbox: {
        '& .MuiSvgIcon-root': {
            fontSize: '40px'
        }
    }
});

export default useStyles;