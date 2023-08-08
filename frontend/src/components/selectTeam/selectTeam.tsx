import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import axios from "../../axios";

const TEAM = "Team";
const LABEL = "team-label";

const SelectTeam: React.FC<SelectTeamProps> = (props) => {
  const { team, setTeam } = props;

  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    axios.get("/teams").then((response) => setTeams(response.data));
  }, []);

  return (
    <FormControl>
      <InputLabel id={LABEL}>{TEAM}</InputLabel>
      <Select
        labelId={LABEL}
        value={team}
        label={LABEL}
        onChange={(e) => setTeam(e.target.value)}
      >
        {teams.map((team) => (
          <MenuItem key={team._id} value={team._id}>
            {team.name + " - " + team.number}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTeam;
