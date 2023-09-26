import React, { useState, useEffect } from "react";

// material-ui
import { DataGrid } from "@mui/x-data-grid";
import { TabContext, TabPanel } from "@material-ui/lab";
import { Tab, Tabs, makeStyles, Button } from "@material-ui/core";

// Components
import MuiTable from "./Muitable";
import Analytics from "./Tab3form";
import ButtonPanel1 from "./Button";
import ButtonPanel2 from "./Button2";
import AddButtonModal from "./Tab2form";
import MultilineTextFields from "./Tab2form";

// style
import "./Tablecss.css";
import "./Headerbuttoncss.css";

// axios
import axios from "axios";

// matrial-Ui Style
const useStyles = makeStyles(() => ({
  tabs: {
    backgroundColor: "white",
    height: "3px",
  },
  gridContainer: {
    border: "none",
    color: "white",
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
}));

// Col
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

const Mui_Tabs = () => {
  const [row, setRow] = useState([]);
  const [showVal, setVal] = useState(0);
  const [value, setValue] = useState("0");
  const [pageSize, setPageSize] = useState(10);
  const [selectedCells, setselectedCells] = useState([]);

  const classes = useStyles();

  //  AXIOS || Get the data
  useEffect(() => {
    const baseURL = "H2H12683K_Ayan/ReadServlet";

    const getRows = async () => {
      let response = await axios.get(baseURL);
      return response.data;
    };

    let setData = async () => setRow(await getRows());
    setData();

    console.log(row);

    if (!row) return null;
  }, []);

  // updating the value of 'setVal'  || to store the value of Search
  const id = (e) => {
    setVal(e.target.value);
  };

  // search
  useEffect(() => {
    let data = row.filter((val) => {
      if (showVal == "") {
        return val;
      } else if (val.CUSTOMER_ORDER_ID.includes(showVal)) {
        console.log("val - " + val.CUSTOMER_ORDER_ID, "showVal - " + showVal);
        return val;
      }
    });

    setRow(data);
  }, [showVal]);

  // Function to Update value for changing the Tab
  const changeTab = (value) => {
    setValue(value);
  };

  // get the of the checked row
  const onRowsSelectionHandler = (ids) => {
    console.log("ids ->" + ids);
    const selectedRowsData = ids.map((id) =>
      row.find((row) => row.SL_NO === id)
    );

    setselectedCells(selectedRowsData);
  };

  return (
    <>
      <TabContext value={value}>
        <div className="Headerbutton">
          <Tabs
            value={value}
            classes={{
              indicator: classes.tabs,
            }}
          >
            <Tab
              label="HOME PAGE"
              value={"0"}
              onClick={() => changeTab("0")}
            ></Tab>
            <Tab
              label="ADD DATA"
              value={"1"}
              onClick={() => changeTab("1")}
            ></Tab>
            <Tab
              label="ANALYTICS VIEW"
              value={"2"}
              onClick={() => changeTab("2")}
            ></Tab>
          </Tabs>
          <div>
            <input
              type="number"
              name=""
              id="search"
              placeholder="SEARCH CUSTOMER ORDER ID"
              onChange={id}
            />

            <Button
              id="button2"
              className={classes.margin}
              variant="contained"
              color="primary"
              fontsize="6px"
            >
              ADVANCED SEARCH
            </Button>
          </div>
        </div>
        <TabPanel value={"0"}>
          <div
            style={{
              height: 550,
              width: "100%",
              color: "white",
              fontsize: "6px",
            }}
          >
            <DataGrid
              className={classes.noColumnSeparator}
              classes={{
                cell: classes.table,
                colomheader: classes.table,
              }}
              // To Set Unique ID  to  each Row
              getRowId={(rows) => rows.SL_NO}
              rows={row}
              columns={columns}
              // components={{Footer: CustomFooter}}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20, 50, 100]}
              checkboxSelection
              disableSelectionOnClick
              onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
            />
            <ButtonPanel1 selectedCells={selectedCells} />
            <ButtonPanel2 selectedCells={selectedCells} />
          </div>
        </TabPanel>
        <TabPanel value={"1"}>
          <MultilineTextFields />
        </TabPanel>
        <TabPanel value={"2"}>
          <Analytics />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default Mui_Tabs;
