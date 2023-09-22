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

  const TbaKeys =  {
    "qm": "qualification match",
    "ef": "eighth finals",
    "qf": "quarterfinals",
    "sf": "semifinals",
    "f": "finals",
    "m": "match",
    "frc": ""
  };
  
  const translateTbaKey = (key: string) => {
    const tbaKeyArr = (key.split("_")[1] || key).split(/(\d+)/);
    // all the even places in the array are strings and odds places are numbers, so we need to translate only the strings
    return tbaKeyArr.map((matchKey, index) => index % 2 == 0 ? TbaKeys[matchKey as keyof(typeof TbaKeys)] : matchKey).join(" ");
  }

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
          <MenuItem key={index} value={item}>{translateTbaKey(item)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFromData;
