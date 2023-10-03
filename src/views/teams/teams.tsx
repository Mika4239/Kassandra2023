import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar.js";
import TeamCard from "../../components/teamCard/teamCard.js";
import useStyles from "./teamsStyles.js";
import { Button } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AddTeamDialog from "../../components/addGroupDialog/addTeamDialog.js";
import executeQuery from "../../graphql/graphqlClient.js";
import { getAllTeams } from "../../graphql/team/queries.js";
import { AllTeams } from "../../graphql/team/interfaces.js";

const TEAMS = "Teams";
const ADD_TEAM = "Add Team";

const Teams: React.FC = () => {
  const { classes } = useStyles();

  const [open, setOpen] = useState<boolean>(false);
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    executeQuery<AllTeams>(getAllTeams).then(response => response && setTeams(response["listTeams"]["items"]));
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
          <TeamCard team={team} key={team.id} />
        ))}
      </div>
    </>
  );
};

export default Teams;
