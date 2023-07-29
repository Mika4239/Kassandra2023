import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "../../axios";
import useStyles from "./selectGraphStyles";

const GRAPH = "Graph";

const SelectGraph: React.FC<SelectGraphProps> = (props) => {
  const { setKey } = props;
  const { classes } = useStyles();

  const [chosen, setChosen] = useState<string>('');
  const [keys, setKeys] = useState<String[]>([]);

  useEffect(() => {
    axios.get("/matchData/keys").then((response) => setKeys(response.data));
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
