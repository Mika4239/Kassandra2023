import DataTable from "../../components/dataTable/dataTable";
import DataGraph from "../../components/dataGraph/dataGraph";
import useStyles from "./dataStyles";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import { MatchData } from "../../types/matchData";
import executeQuery from "../../graphql/graphqlClient";
import { UsersList } from "../../graphql/user/interfaces";
import { allUsersByTeam } from "../../graphql/user/queries";
import { useAppSelector } from "../../redux/hooks";
import { MatchDataList } from "../../graphql/matchData/interfaces";
import { AllMatchData } from "../../graphql/matchData/queries";

const TABLE = "Table";
const GRAPH = "Graph";

const Data: React.FC = () => {
  const { classes } = useStyles();

  const [data, setData] = useState<MatchData[]>([]);
  const [users, setUsers] = useState<string[]>([]);
  const currentUserTeam = useAppSelector((state) => state.user.team);

  useEffect(() => {
    executeQuery<UsersList>(allUsersByTeam, {
      team: currentUserTeam,
    }).then(
      (response) =>
        response && setUsers(response.listUsers.items.map((user) => user.id))
    );
    executeQuery<MatchDataList>(AllMatchData).then((response) => {
      const matchDataList = response?.listMatchData.items || [];
      setData(
        matchDataList
          .filter((matchData) => users.includes(matchData.user))
          .map((matchData) => {
            return {
              ...matchData,
              autonomous: JSON.parse(matchData.autonomous),
              teleop: JSON.parse(matchData.teleop),
              endgame: JSON.parse(matchData.endgame),
            };
          })
      );
    });
  }, [users]);

  const getTeamForGroup = (data: MatchData[]): MatchData[] => {
    return data.map((matchData) => {
      const teamSplitBySpace = matchData.team.split(" ");
      return {
        ...matchData,
        team: teamSplitBySpace[teamSplitBySpace.length - 1],
      };
    });
  };

  return (
    <>
      <NavBar />
      <div className={classes.dataPage}>
        <h1 className={classes.title}>{TABLE}</h1>
        <DataTable data={data} />
        <h1 className={classes.title}>{GRAPH}</h1>
        <DataGraph data={getTeamForGroup(data)} />
      </div>
    </>
  );
};

export default Data;
