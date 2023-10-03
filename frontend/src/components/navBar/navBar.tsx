import { NavLink } from "react-router-dom";
import useStyles from "./navBarStyles";
import UserMenu from "../userMenu/userMenu";

const SCOUTING_PATH = "/select";
const DATA_PATH = "/data";

const SCOUTING = "Scouting";
const DATA = "Data";

const NavBar: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.bar}>
      <NavLink to={SCOUTING_PATH} className={classes.navLink}>
        {SCOUTING}
      </NavLink>
      <NavLink to={DATA_PATH} className={classes.navLink}>
        {DATA}
      </NavLink>
      <UserMenu />
    </div>
  );
};

export default NavBar;
