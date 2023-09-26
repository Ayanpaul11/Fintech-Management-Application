import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

//  axios
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function MultilineTextFields() {
  const [showData, setData] = useState({
    CUSTOMER_ORDER_ID: "",
    SALES_ORG: "",
    DISTRIBUTION_CHANNEL: "",
    CUSTOMER_NO: "",
    COMPANY_CODE: "",
    ORDER_CURRENCY: "",
    AMOUNT_IN_USD: "",
    ORDER_CREATION_DATE: "",
  });

  // useEffect(() => {
  // console.log(showData);
  // }, [showData]);

  const DataInp = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const ClearData = async (e) => {
    setData({
      CUSTOMER_ORDER_ID: "",
      SALES_ORG: "",
      DISTRIBUTION_CHANNEL: "",
      CUSTOMER_NO: "",
      COMPANY_CODE: "",
      ORDER_CURRENCY: "",
      AMOUNT_IN_USD: "",
      ORDER_CREATION_DATE: "",
    });
  };

  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  //add data function
  const AddData = async () => {
    console.log(showData);

    const baseURL = "H2H12683K_Ayan/AddServlet";
    // const getRows = async () => {
    // let response = await axios.post(baseURL, showData);

    // console.log(response);
    console.log("Data added");
    ClearData();

    // return response.data;
    // };
  };
  //Add data
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-textarea"
          label="CUSTOMER ORDER ID "
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "400px",
            backgroundColor: "white",
            borderRadius: "3px",
            color: "black",
          }}
          value={showData.CUSTOMER_ORDER_ID}
          name="CUSTOMER_ORDER_ID"
          onChange={DataInp}
        />
        <TextField
          id="filled-textarea"
          label="SALES ORG "
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "400px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.SALES_ORG}
          name="SALES_ORG"
          onChange={DataInp}
        />
        <TextField
          id="filled-textarea"
          label="DISTRIBUTION CHANNEL"
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "800px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.DISTRIBUTION_CHANNEL}
          name="DISTRIBUTION_CHANNEL"
          onChange={DataInp}
        />
      </div>
      <div>
        <TextField
          id="filled-textarea"
          label="CUSTOMER NO"
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "400px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.CUSTOMER_NO}
          name="CUSTOMER_NO"
          onChange={DataInp}
        />
        <TextField
          id="filled-textarea"
          label="COMPANY CODE"
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "400px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.COMPANY_CODE}
          name="COMPANY_CODE"
          onChange={DataInp}
        />
        <TextField
          id="filled-textarea"
          label="ORDER CURRENCY"
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "255px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.ORDER_CURRENCY}
          name="ORDER_CURRENCY"
          onChange={DataInp}
        />
        <TextField
          id="filled-textarea"
          label="AMOUNT IN USD"
          placeholder=""
          multiline
          variant="filled"
          style={{
            width: "255px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
          value={showData.AMOUNT_IN_USD}
          name="AMOUNT_IN_USD"
          onChange={DataInp}
        />
        <TextField
          label="ORDER CREATION DATE"
          variant="filled"
          type="date"
          placeholder=""
          fullWidth
          style={{
            width: "255px",
            backgroundColor: "white",
            borderRadius: "3px",
            color: "grey",
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={showData.ORDER_CREATION_DATE}
          name="ORDER_CREATION_DATE"
          onChange={DataInp}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Button
          id="refresh"
          class="custom-button"
          variant="contained"
          className={classes.margin}
          style={{
            width: "810px",
            backgroundColor: "#fc7500",
            borderRadius: "3px",
            marginRight: "18px",
          }}
          onClick={AddData}
        >
          ADD
        </Button>
        <Button
          id="refresh"
          class="custom-button"
          variant="contained"
          className={classes.margin}
          style={{
            width: "810px",
            backgroundColor: "#db4437",
            borderRadius: "3px",
          }}
          onClick={ClearData}
        >
          CLEAR DATA
        </Button>
      </div>
    </form>
  );
}
