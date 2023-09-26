import React, { useState } from "react";

// material-ui
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

// style
import "./Buttoncss.css";

// matrial-Ui Style
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

const Edit2_Buttons = (props) => {
  const [value, setValue] = useState("one");
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({
    ORDER_CURRENCY: "",
    COMPANY_CODE: "",
    DISTRIBUTION_CHANNEL: "",
  });

  const classes = useStyles();

  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const onClose = (isDataRequired) => {
    setOpen(false);
    console.log(isDataRequired ? console.log(data) : null);
  };

  // Function to Reload the Data
  const refresh = () => window.location.reload(true);

  return (
    <>
      <Button
        id={props.selectedCells.length > 0 ? "edit" : "editDis"}
        onClick={() => {
          props.selectedCells.length > 0
            ? setOpen(true)
            : console.log("No Allowed");
        }}
        className={classes.margin}
        variant="contained"
      >
        DELETE
      </Button>

      <Modal
        id="Delete"
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
          <div className={classes.paper}>
            <h1 style={{ fontFamily: "Calibri" }}> Delete Records? </h1>
            <h2 style={{ fontFamily: "Calibri" }}>
              Are you sure you want to delete these record[s] ?
            </h2>
            <div>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => onClose(false)}
              >
                CANCEL
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => onClose(true)}
              >
                DELETE
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
      <Button
        id="predict"
        class="custom-button"
        variant="contained"
        className={classes.margin}
      >
        PREDICT
      </Button>
    </>
  );
};

export default Edit2_Buttons;
