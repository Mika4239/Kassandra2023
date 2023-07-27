import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Position from "../../types/position";
import useStyles from "./choosePositionStyles";

const AUTONOMOUS = "autonomous";
const PARK = "PARK";

const POSITION = "Position";

const ChoosePosition: React.FC<ChoosePositionProps> = (props) => {
  const { period } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.positionRadio}>
      <h2 className={classes.label}>{period + " " + POSITION}</h2>
      <RadioGroup
        defaultValue={Position.NONE}
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
