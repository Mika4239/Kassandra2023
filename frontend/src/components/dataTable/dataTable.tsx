import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DataTableProps from "./dataTableProps";
import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const MAIN_TITLES = [
  "",
  "",
  "autonomous",
  "",
  "",
  "",
  "",
  "teleop",
  "",
  "",
  "endgame",
  "",
];

const SUB_TITLES = [
  "match",
  "team",
  "mobility",
  "cones",
  "cubes",
  "links",
  "position",
  "cones",
  "cubes",
  "links",
  "position",
  "comments",
];

const DataTable: React.FC<DataTableProps> = (props) => {
  const { data } = props;

  const createCSV = () => {
    const csv: string =
      MAIN_TITLES.join(",") +
      "\n" +
      SUB_TITLES.join(",") +
      "\n" +
      data.map(
        (row) =>
          row.match +
          "," +
          row.team +
          "," +
          Object.values(row.autonomous).join(",") + ',' +
          Object.values(row.teleop).join(",") + ',' +
          Object.values(row.endgame).join(",")
      ).join('\n');

      window.open(encodeURI("data:text/csv;charset=utf-8," + csv));
  };
  return (
    <>
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
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.match}</TableCell>
                <TableCell>{row.team}</TableCell>
                {Object.values(row.autonomous).map((value) => (
                  <TableCell>{value.toString()}</TableCell>
                ))}
                {Object.values(row.teleop).map((value) => (
                  <TableCell>{value.toString()}</TableCell>
                ))}
                {Object.values(row.endgame).map((value) => (
                  <TableCell>{value.toString()}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <IconButton onClick={createCSV}>
        <DownloadIcon />
      </IconButton>
    </>
  );
};

export default DataTable;
