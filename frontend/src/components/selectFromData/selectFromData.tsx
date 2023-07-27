import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "./selectFromDataStyles";
import { useAppSelector } from "../../redux/hooks";
import { SelectMatchState } from "../../interfaces/interfaces";
import { useDispatch } from "react-redux";
import { setMatchTeam } from "../../redux/matchDataSlice";

const SelectFromData: React.FC<SelectFromDataProps> = (props) => {
  const { classes } = useStyles();
  const { name, data } = props;

  const chosen = useAppSelector(state => state.matchData[name as keyof SelectMatchState]);
  const dispatch = useDispatch();

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id={name + "-label"}>{name}</InputLabel>
      <Select
        labelId={name + "-label"}
        value={chosen}
        label={name}
        onChange={(e) => dispatch(setMatchTeam({name: name, input: e.target.value}))}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFromData;
