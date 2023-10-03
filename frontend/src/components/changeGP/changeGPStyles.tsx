import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  changeGp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '40px'
  },
  title: {
    fontSize: "30px",
    color: "#213547",
    fontWeight: "bold",
    textTransform: "capitalize"
  },
});

export default useStyles;
