import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Position from "../../types/position.js";
import useStyles from "./choosePositionStyles.js";
import { useAppSelector } from "../../redux/hooks.js";
import { PositionPeriods } from "../../interfaces/interfaces.js";
import { useDispatch } from "react-redux";
import { setPosition } from "../../redux/matchDataSlice.js";

const AUTONOMOUS = "autonomous";
const PARK = "PARK";

const POSITION = "Position";

const ChoosePosition: React.FC<ChoosePositionProps> = (props) => {
  const { period } = props;
  const { classes } = useStyles();

  const position = useAppSelector(state => state.matchData[period as keyof PositionPeriods].position);
  const dispatch = useDispatch();

  return (
    <div className={classes.positionRadio}>
      <h2 className={classes.title}>{period + " " + POSITION}</h2>
      <RadioGroup
        value={position}
        onChange={(event) => dispatch(setPosition({period: period, position: event.target.value as Position}))}
        name={`${period}-position`}
      >
        {Object.keys(Position).map(
          (position) =>
            (period === AUTONOMOUS && position === PARK) || (
              <FormControlLabel
                value={position}
                control={<Radio />}
                label={position.toString()}
              />
            )
        )}
      </RadioGroup>
    </div>
  );
};

export default ChoosePosition;
