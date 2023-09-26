import React, { useEffect } from "react";
import { useState } from "react";
import "./Buttoncss.css";
import {
  AppBar,
  Backdrop,
  Button,
  Fade,
  Modal,
  Tab,
  Tabs,
  makeStyles,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  margin: {
    backgroundColor: "orange",
    color: "white",
  },
  modal: {
    padding: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "3px solid#fc7500",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  short: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  long: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "61.5ch",
    },
  },
  button: {
    width: "31ch",
    margin: "7px",
  },
}));

const Edit_Buttons = (props) => {
  const [value, setValue] = useState("one");
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({
    ORDER_CURRENCY: "",
    COMPANY_CODE: "",
    DISTRIBUTION_CHANNEL: "",
  });

  // show the data of the row on pop-up
  useEffect(() => {
    if (props.selectedCells.length === 1) {
      setdata({
        ORDER_CURRENCY: props.selectedCells[0].ORDER_CURRENCY,
        COMPANY_CODE: props.selectedCells[0].COMPANY_CODE,
        DISTRIBUTION_CHANNEL: props.selectedCells[0].DISTRIBUTION_CHANNEL,
      });
      console.log(props.selectedCells[0]);
    }
  }, [props.selectedCells]);

  const classes = useStyles();

  //change pop up values
  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  // close popup
  const onClose = (isDataRequired) => {
    setOpen(false);
    console.log(isDataRequired ? console.log(data) : null);
  };

  // Function to Reload the Data
  const refresh = () => window.location.reload(true);

  return (
    <>
      <Button
        onClick={refresh}
        id="refresh"
        class="custom-button"
        variant="contained"
        className={classes.margin}
      >
        REFRESH DATA
      </Button>
      <Button
        id={props.selectedCells.length === 1 ? "edit" : "editDis"}
        onClick={() => {
          props.selectedCells.length === 1
            ? setOpen(true)
            : console.log("No Allowed");
        }}
        className={classes.margin}
        variant="contained"
      >
        EDIT
      </Button>

      <Modal
        id="Edit"
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <form noValidate autoComplete="off">
            <div className={classes.paper}>
              <h1 style={{ fontFamily: "Calibri" }}> Edit </h1>
              <div className={classes.short}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="ORDER CURRENCY"
                  multiline
                  maxRows={4}
                  value={data.ORDER_CURRENCY}
                  defaultValue={data.ORDER_CURRENCY}
                  onChange={changeHandler}
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="COMPANY CODE"
                  multiline
                  maxRows={4}
                  value={data.COMPANY_CODE}
                  defaultValue={data.COMPANY_CODE}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </div>
              <div className={classes.long}>
                <TextField
                  id="outlined-multiline-flexible"
                  label="DISTRIBUTION CHANNEL"
                  multiline
                  maxRows={4}
                  value={data.DISTRIBUTION_CHANNEL}
                  defaultValue={data.DISTRIBUTION_CHANNEL}
                  onChange={changeHandler}
                  variant="outlined"
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() => onClose(true)}
                >
                  EDIT
                </Button>

                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() => onClose(false)}
                >
                  CANCEL
                </Button>
              </div>
            </div>
          </form>
        </Fade>
      </Modal>
    </>
  );
};

export default Edit_Buttons;
