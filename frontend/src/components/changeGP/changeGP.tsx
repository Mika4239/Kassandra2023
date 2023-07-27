import { IconButton, TextField } from "@mui/material";
import useStyles from "./changeGPStyles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useAppSelector } from "../../redux/hooks";
import { TeleopState, Periods } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { setGPAmount } from "../../redux/matchDataSlice";

const ChangeGP: React.FC<ChangeGPProps> = (props) => {
  const { classes } = useStyles();
  const { gp, period } = props;

  const gpAmount = useAppSelector(
    (state) => state.matchData[period as keyof Periods][gp as keyof TeleopState]
  );
  const dispatch = useDispatch();

  const changeAmount = (amount: number) => {
    dispatch(setGPAmount({
        period: period,
        gp: gp,
        amount: amount
      }))
  }

  return (
    <>
      <h2 className={classes.title}>{gp}</h2>
      <div className={classes.changeAmount}>
        <IconButton onClick={() => changeAmount(gpAmount - 1)}>
          <RemoveIcon />
        </IconButton>
        <TextField
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

export default ChangeGP;
