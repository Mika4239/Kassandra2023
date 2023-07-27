import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DataTableProps from "./dataTableProps";

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
    </>
  );
};

export default DataTable;
