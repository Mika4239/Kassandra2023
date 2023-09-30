import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import useStyles from "./selectGraphStyles";
import { useAppSelector } from "../../redux/hooks";

const GRAPH = "Graph";

const getAllKeys = (data: Object, keys: string[], keyString: string) => {
  if(typeof data == 'object'){
    Object.keys(data).forEach(key => {
      const value = data[key as keyof Object];
      if(typeof value === 'object'){
         getAllKeys(value, keys, keyString + key + ".");
      }
      else{
        keys.push(keyString + key);
      }
   });
  }
  return keys;
}

const SelectGraph: React.FC<SelectGraphProps> = (props) => {
  const { setKey } = props;
  const { classes } = useStyles();

  const [chosen, setChosen] = useState<string>('');
  const [keys, setKeys] = useState<String[]>([]);

  const matchData = useAppSelector(state => state.matchData);

  useEffect(() => {
    setKeys(getAllKeys(matchData, [], ""));
  }, []);

  const handleChange = (e: SelectChangeEvent) => {
    setChosen(e.target.value);
    setKey(e.target.value);
  }

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id="graph-label">{GRAPH}</InputLabel>
      <Select
        labelId="graph-label"
        type="string"
        value={chosen}
        label={GRAPH}
        onChange={(e) => handleChange(e)}
      >
        {keys.map((item, index) => (
          <MenuItem key={index} value={item.toString()}>
            {item.split('.').join(' ').toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectGraph;
