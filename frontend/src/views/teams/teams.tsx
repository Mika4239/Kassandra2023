import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import TeamCard from "../../components/teamCard/teamCard";
import axios from "../../axios";
import useStyles from "./teamsStyles";
import { Button } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AddTeamDialog from "../../components/addGroupDialog/addTeamDialog";

const TEAMS = "Teams";
const ADD_TEAM = "Add Team";

const Teams: React.FC = () => {
  const { classes } = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    axios.get("/teams").then((response) => setTeams(response.data));
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.teamsPage}>
        <h1 className={classes.title}>{TEAMS}</h1>
        <Button
          variant="contained"
          className={classes.addGroup}
          onClick={() => setOpen(true)}
        >
          {ADD_TEAM}
          <GroupIcon className={classes.groupIcon} />
        </Button>
        <AddTeamDialog open={open} setOpen={setOpen} setTeams={setTeams} />
        {teams.map((team) => (
          <TeamCard team={team} />
        ))}
      </div>
    </>
  );
};

export default Teams;
