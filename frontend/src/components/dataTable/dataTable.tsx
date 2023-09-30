import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useEffect, useState } from "react";
import { MatchData } from "../../types/matchData";
import useStyles from "./dataTableStyles";
import { useAppSelector } from "../../redux/hooks";
import executeQuery from "../../graphql/graphqlClient";
import { AllMatchData } from "../../graphql/matchData/queries";
import { MatchDataList } from "../../graphql/matchData/interfaces";
import { UsersList } from "../../graphql/user/interfaces";
import { allUsersByTeam } from "../../graphql/user/queries";

const MAIN_TITLES = [
  "",
  "",
  "autonomous",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "teleop",
  "",
  "",
  "",
  "",
  "",
  "endgame",
  "",
];

const SUB_TITLES = [
  "match",
  "team",
  "cones",
  "",
  "",
  "cubes",
  "",
  "",
  "mobility",
  "position",
  "cones",
  "",
  "",
  "cubes",
  "",
  "",
  "position",
  "comments",
];

const GP_TITLES = [
  "",
  "",
  "top",
  "middle",
  "bottom",
  "top",
  "middle",
  "bottom",
  "",
  "",
  "top",
  "middle",
  "bottom",
  "top",
  "middle",
  "bottom",
  "",
  "",
];

const DataTable: React.FC = () => {
  const { classes } = useStyles();

  const currentUserTeam = useAppSelector((state) => state.user.team);

  const [data, setData] = useState<MatchData[]>([]);
  const [users, setUsers] = useState<string[]>([]);

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

  const createCSV = () => {
    const csv: string =
      MAIN_TITLES.join(",") +
      "\n" +
      SUB_TITLES.join(",") +
      "\n" +
      GP_TITLES.join(",") +
      "\n" +
      data
        .map(
          (row) =>
            row.match +
            "," +
            row.team +
            "," +
            row.autonomous.cones.top +
            "," +
            row.autonomous.cones.middle +
            "," +
            row.autonomous.cones.bottom +
            "," +
            row.autonomous.cubes.top +
            "," +
            row.autonomous.cubes.middle +
            "," +
            row.autonomous.cubes.bottom +
            "," +
            row.autonomous.mobility +
            "," +
            row.autonomous.position +
            "," +
            row.teleop.cones.top +
            "," +
            row.teleop.cones.middle +
            "," +
            row.teleop.cones.bottom +
            "," +
            row.teleop.cubes.top +
            "," +
            row.teleop.cubes.middle +
            "," +
            row.teleop.cubes.bottom +
            "," +
            row.endgame.position +
            "," +
            row.endgame.comments +
            ","
        )
        .join("\n");

    window.open(encodeURI("data:text/csv;charset=utf-8," + csv));
  };
  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {MAIN_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              {SUB_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              {GP_TITLES.map((title, index) => (
                <TableCell key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.team}</TableCell>
                <TableCell>{row.autonomous.cones.top}</TableCell>
                <TableCell>{row.autonomous.cones.middle}</TableCell>
                <TableCell>{row.autonomous.cones.bottom}</TableCell>
                <TableCell>{row.autonomous.cubes.top}</TableCell>
                <TableCell>{row.autonomous.cubes.middle}</TableCell>
                <TableCell>{row.autonomous.cubes.bottom}</TableCell>
                <TableCell>{row.autonomous.mobility}</TableCell>
                <TableCell>{row.autonomous.position}</TableCell>
                <TableCell>{row.teleop.cones.top}</TableCell>
                <TableCell>{row.teleop.cones.middle}</TableCell>
                <TableCell>{row.teleop.cones.bottom}</TableCell>
                <TableCell>{row.teleop.cubes.top}</TableCell>
                <TableCell>{row.teleop.cubes.middle}</TableCell>
                <TableCell>{row.teleop.cubes.bottom}</TableCell>
                <TableCell>{row.endgame.position}</TableCell>
                <TableCell>{row.endgame.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton className={classes.download} onClick={createCSV}>
        <DownloadIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default DataTable;
