import { Button, TextField } from "@mui/material";
import useStyles from "./loginStyles";
import { useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/currentUserSlice";
import SignUpDialog from "../../components/signUpDialog/signUpDialog";

const LOGIN = "Login";
const SIGN_IN = "Sign in";
const SIGN_UP = "Sign up";

const Login = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const login = async () => {
    const userExists = await axios.post('/users/check', {
        username: username,
        password: password
    }).then(response => response.data);

    if(userExists){
        axios.get(`/users/user/${username}`).then(response => dispatch(setUser(response.data)));
        navigate('/select');
    }
  }

  return (
    <div className={classes.loginPage}>
      <h1 className={classes.title}>{LOGIN}</h1>
      <TextField
        className={classes.signInput}
        label="username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        className={classes.signInput}
        label="password"
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <Button className={classes.signButton} variant="contained" onClick={login}>
          {SIGN_IN}
        </Button>
        <Button className={classes.signButton} onClick={() => setOpen(true)}>{SIGN_UP}</Button>
        <SignUpDialog open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Login;
