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
import axios from "../../axios";
import { MatchData } from "../../types/matchData";
import useStyles from "./dataTableStyles";
import DataObject from "../dataObject/dataObject";

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

  const [data, setData] = useState<MatchData[]>([]);

  useEffect(() => {
    axios.get("/matchData").then((response) => setData(response.data));
  }, []);

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
            Object.values(row)
              .map((value) =>
                typeof value === "object"
                  ? Object.values(value)
                      .map((objectValue) =>
                        typeof objectValue === "object"
                          ? Object.values(objectValue as object).join(",")
                          : objectValue
                      )
                      .join(",")
                  : ""
              )
              .join(",")
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
              <TableRow key={row._id}>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.team}</TableCell>
                <DataObject object={row.autonomous} />
                <DataObject object={row.teleop} />
                <DataObject object={row.endgame} />
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
