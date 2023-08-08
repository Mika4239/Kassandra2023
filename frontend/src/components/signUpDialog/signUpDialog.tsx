import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "../../axios";
import useStyles from "./signUpDialogStyles";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SelectTeam from "../selectTeam/selectTeam";

const SIGN_UP = "Sign Up";

const FIRST_NAME = "First Name";
const LAST_NAME = "Last Name";
const USERNAME = "Username";
const PASSWORD = "Password";

const CANCEL = "Cancel";

const SignUpDialog: React.FC<SignUpDialogProps> = (props) => {
  const { classes } = useStyles();
  const { open, setOpen } = props;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const addUser = () => {
    const user: User = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    const newUser = team
      ? {
          ...user,
          team: team,
        }
      : user;

    axios.post("/users", newUser);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{SIGN_UP}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <TextField
          className={classes.inputBox}
          label={FIRST_NAME}
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          className={classes.inputBox}
          label={LAST_NAME}
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <TextField
          className={classes.inputBox}
          label={USERNAME}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          className={classes.inputBox}
          label={PASSWORD}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
        <SelectTeam team={team} setTeam={setTeam} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>{CANCEL}</Button>
        <Button variant="contained" onClick={addUser}>
          {SIGN_UP}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUpDialog;
