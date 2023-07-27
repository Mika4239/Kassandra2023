import { IconButton, TextField } from "@mui/material";
import useStyles from "./changeGPStyles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ChangeGP: React.FC<ChangeGPProps> = (props) => {
  const { classes } = useStyles();
  const { gp } = props;

  return (
    <>
      <h2 className={classes.title}>{gp}</h2>
      <div className={classes.changeAmount}>
        <IconButton>
          <RemoveIcon />
        </IconButton>
        <TextField type="number" />
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ChangeGP;
