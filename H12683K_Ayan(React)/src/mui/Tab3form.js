import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Backdrop, Button, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  long: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "104ch",
      borderRadius: "5px",
      //   border: '2px solid white'
    },
  },
  button: {
    width: "68ch",
    margin: "7px",
    border: "2px solid white",
    borderRadius: "5px",
  },
}));

export default function Analytics() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <div
        style={{
          border: "2px solid white",
          width: "550px",
          borderRadius: "5px",
        }}
      >
        <div className={classes.long}>
          <TextField
            style={{ backgroundColor: "white" }}
            id="outlined-multiline-flexible"
            label="DISTRIBUTION CHANNEL"
            placeholder="DISTRIBUTION CHANNEL"
            multiline
            maxRows={4}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div className={classes.long}>
          <TextField
            style={{ backgroundColor: "white" }}
            id="outlined-multiline-flexible"
            label="CUSTOMER NUMBER"
            placeholder="CUSTOMER NUMBER"
            multiline
            maxRows={4}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            style={{ color: "white" }}
          >
            VIEW
          </Button>
        </div>
      </div>
    </form>
  );
}
