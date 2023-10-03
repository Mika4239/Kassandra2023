import ChangeGPRow from "../changeGPRow/changeGPRow.js";
import useStyles from "./changeGPStyles.js";

const TOP = "top";
const MIDDLE = "middle";
const BOTTOM = "bottom";

const ChangeGP: React.FC<ChangeGPProps> = (props) => {
  const { gp, period } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.changeGp}>
      <h2 className={classes.title}>{gp}</h2>
      <ChangeGPRow gp={gp} period={period} row={TOP} />
      <ChangeGPRow gp={gp} period={period} row={MIDDLE} />
      <ChangeGPRow gp={gp} period={period} row={BOTTOM} />
    </div>
  );
};

export default ChangeGP;
