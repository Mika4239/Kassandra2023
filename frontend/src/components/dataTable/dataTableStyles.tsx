import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    container: {
        width: '90%'
    },
    download: {
        display: 'flex',
        width: '90vw',
        justifyContent: 'start',
        margin: '10px'
    },
    icon: {
        fontSize: '50px'
    }
});

export default useStyles;