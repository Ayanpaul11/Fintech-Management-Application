import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import "./Tablecss.css";
import { Checkbox } from "@material-ui/core";

let columns = [
  { field: "SL_NO", headerName: "SL NO", width: 90, flex: 0.3, minwidth: 40 },
  {
    field: "CUSTOMER_ORDER_ID",
    headerName: "CUSTOMER ORDER ID",
    flex: 0.3,
    minwidth: 40,
  },
  { field: "SALES_ORG", headerName: "SALES ORG", flex: 0.3, minwidth: 40 },
  {
    field: "DISTRIBUTION_CHANNEL",
    headerName: "DISTRIBUTION CHANNEL",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "COMPANY_CODE",
    headerName: "COMPANY CODE",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "ORDER_CREATION_DATE",
    headerName: "ORDER CREATION DATE",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "ORDER_AMOUNT",
    headerName: "ORDER AMOUNT",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "ORDER_CURRENCY",
    headerName: "ORDER CURRENCY",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "CUSTOMER_NUMBER",
    headerName: "CUSTOMER NUMBER",
    flex: 0.3,
    minwidth: 40,
  },
  {
    field: "AMOUNT_IN_USD",
    headerName: "AMOUNT IN USD",
    flex: 0.3,
    minwidth: 40,
  },
];
let useStyles = makeStyles({
  gridContainer: {
    border: "none",
  },
  table: {
    backgroundcolor: "#a9a9a9",
    color: "white",
  },
  noColumnSeparator: {
    "& .MuiDataGrid-columnSeparator": {
      display: "none",
    },
  },
});

export default function MuiTable(props) {
  let [rows, setRows] = useState([]);
  let classes = useStyles();
  //let[loading,setLoading]=useState(true);

  //fetching data from servlet
  let fetchData = async () => {
    let body = await fetch("http://localhost:8080/H2H12683K_Ayan/ReadServlet");
    let response = await body.json();
    //setting timeout of 3secs
    //setTimeout( () => {
    setRows(response);
    //setLoading(false);
    //},3000);
  };
  // eslint-disable-next-line no-unused-expressions
  rows.length === 0 ? fetchData() : null;

  React.useEffect(() => {
    console.log(props.serach);
  }, []);
  return (
    <div style={{ height: 550, width: "100%", color: "white" }}>
      <DataGrid
        container
        className={classes.noColumnSeparator}
        classes={{
          cell: classes.table,
          colomheader: classes.table,
        }}
        getRowId={(rows) => rows.SL_NO}
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
