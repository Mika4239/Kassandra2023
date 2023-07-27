import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStyles from "./selectFromDataStyles";

const SelectFromData: React.FC<SelectFromDataProps> = (props) => {
  const { classes } = useStyles();
  const { name, data, chosen, setChosen } = props;

  return (
    <FormControl className={classes.selectBox}>
      <InputLabel id={name + "-label"}>{name}</InputLabel>
      <Select
        labelId={name + "-label"}
        value={chosen}
        label={name}
        onChange={(e) => setChosen(e.target.value)}
      >
        {data.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFromData;
