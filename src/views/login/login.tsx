import { Button, TextField } from "@mui/material";
import useStyles from "./loginStyles.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/currentUserSlice.js";
import SignUpDialog from "../../components/signUpDialog/signUpDialog.js";
import executeQuery from "../../graphql/graphqlClient.js";
import { checkUser } from "../../graphql/user/queries.js";
import { UsersList } from "../../graphql/user/interfaces.js";

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
    const userDetails = {username: username, password: password};
    const usersList = await executeQuery<UsersList>(checkUser, userDetails).then(response => response && response.listUsers.items);

    if(usersList && usersList.length > 0){
        dispatch(setUser(usersList[0]));
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
