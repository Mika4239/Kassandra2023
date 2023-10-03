import Logout from "@mui/icons-material/Logout";
import Groups from "@mui/icons-material/Groups";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import useStyles from "./userMenuStyles";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/currentUserSlice";

const PROFILE = "Profile";
const GROUPS = "Teams";
const LOGOUT = "Logout";

const LOGIN_PATH = "/";
const TEAMS_PATH = "/teams";

const UserMenu: React.FC = () => {
  const { classes } = useStyles();

  const currentUser = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small">
        <Avatar
          src={`https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Avatar
            className={classes.profile}
            src={`https://ui-avatars.com/api/?name=${currentUser.firstName}+${currentUser.lastName}`}
          />
          {PROFILE}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <NavLink to={TEAMS_PATH} className={classes.navLink}>
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            {GROUPS}
          </NavLink>
        </MenuItem>
        <NavLink
          to={LOGIN_PATH}
          onClick={() => dispatch(resetUser())}
          className={classes.navLink}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            {LOGOUT}
          </MenuItem>
        </NavLink>
      </Menu>
    </>
  );
};

export default UserMenu;
