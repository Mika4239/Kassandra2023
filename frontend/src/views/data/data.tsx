import DataTable from "../../components/dataTable/dataTable";
import DataGraph from "../../components/dataGraph/dataGraph";
import useStyles from "./dataStyles";
import React from "react";
import NavBar from "../../components/navBar/navBar";

const TABLE = "Table";
const GRAPH = "Graph";

const Data: React.FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.dataPage}>
        <h1 className={classes.title}>{TABLE}</h1>
        <DataTable />
        <h1 className={classes.title}>{GRAPH}</h1>
        <DataGraph />
      </div>
    </>
  );
};

export default Data;
