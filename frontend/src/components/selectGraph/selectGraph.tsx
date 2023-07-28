import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "../../axios";
import useStyles from "./selectGraphStyles";

const GRAPH = "Graph";

const SelectGraph: React.FC<SelectGraphProps> = (props) => {
  const { key, setKey } = props;
  const { classes } = useStyles();

  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    axios.get("/matchData/keys").then((response) => setKeys(response.data));
  }, []);

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id="graph-label">{GRAPH}</InputLabel>
      <Select
        labelId="graph-label"
        value={key}
        label={GRAPH}
        onChange={(e) => setKey(e.target.value)}
      >
        {keys.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item.replace('.', ' ')}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectGraph;
