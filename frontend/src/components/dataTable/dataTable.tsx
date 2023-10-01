import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataTableProps } from "./dataTableProps";
import useStyles from "./dataTableStyles";

const MAIN_TITLES = [
  "",
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
  "event",
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

const DataTable: React.FC<DataTableProps> = (props) => {
  const { classes } = useStyles();
  const { data } = props;

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
            row.event +
            "," +
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
                <TableCell>{row.event}</TableCell>
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
