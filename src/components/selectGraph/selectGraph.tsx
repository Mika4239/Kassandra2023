import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import useStyles from "./selectGraphStyles";
import { useAppSelector } from "../../redux/hooks";
import { getNestedKeys } from "../../utils/general";

const GRAPH = "Graph";

const POSITIONS = ["ENGAGED", "DOCKED", "NONE"];
const PARK = "PARK";

const SelectGraph: React.FC<SelectGraphProps> = (props) => {
  const { setKey } = props;
  const { classes } = useStyles();

  const [chosen, setChosen] = useState<string>("");
  const [keys, setKeys] = useState<String[]>([]);

  const matchData = useAppSelector((state) => state.matchData);

  useEffect(() => {
    let nestedKeys: string[] = [];
    getNestedKeys(matchData, [], "")
      .filter((nestedKey) => nestedKey.includes(".") && !nestedKey.includes("comments"))
      .forEach(
        (nestedKey) =>
          (nestedKeys = nestedKeys.concat(
            nestedKey.includes("position")
              ? nestedKey.includes("endgame")
                ? [...POSITIONS, PARK].map(
                    (position) => nestedKey + "." + position
                  )
                : POSITIONS.map((position) => nestedKey + "." + position)
              : [nestedKey]
          ))
      );
    setKeys(nestedKeys);
  }, []);

  const handleChange = (e: SelectChangeEvent) => {
    setChosen(e.target.value);
    setKey(e.target.value);
  };

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
            {item.split(".").join(" ").toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectGraph;
