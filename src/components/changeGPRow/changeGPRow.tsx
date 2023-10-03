import { IconButton, TextField } from "@mui/material";
import useStyles from "./changeGPRowStyles.js";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../../redux/hooks.js";
import { Periods, GpState } from "../../interfaces/interfaces.js";
import { useDispatch } from "react-redux";
import { setGPAmount } from "../../redux/matchDataSlice.js";

const CUBES = "cubes";

const ChangeGPRow: React.FC<ChangeGPRowProps> = (props) => {
  const { classes } = useStyles();
  const { gp, period, row } = props;

  const gpAmount = useAppSelector((state) =>
    gp === CUBES
      ? state.matchData[period as keyof Periods].cubes[row as keyof GpState]
      : state.matchData[period as keyof Periods].cones[row as keyof GpState]
  );
  const dispatch = useDispatch();

  const changeAmount = (amount: number) => {
    const positive = gpAmount > 0 || (gpAmount == 0 && amount > 0);
    positive && dispatch(
      setGPAmount({
        row: row,
        period: period,
        gp: gp,
        amount: amount,
      })
    );
  };

  return (
    <>
      <h3 className={classes.title}>{row}</h3>
      <div className={classes.changeAmount}>
        <IconButton onClick={() => changeAmount(gpAmount - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
          className={classes.inputBox}
          type="number"
          value={gpAmount}
          onChange={(event) => changeAmount(Number(event.target.value))}
        />
        <IconButton onClick={() => changeAmount(gpAmount + 1)}>
          <AddIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ChangeGPRow;
