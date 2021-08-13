import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import { Text } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Quantity() {
  // const classes = useStyles();
  const [qty, setQty] = useState(1);

  function increment() {
    setQty(qty + 1);
  }

  function decrement() {
    setQty(qty - 1);
  }

  return (
    <div style={{ display: "flex" }}>
      <Button
        disabled={qty === 1 ? true : false}
        onClick={() => {
          decrement();
        }}
        // style={{ background: "#ffffff" }}
      >
        <RemoveIcon />
      </Button>
      
      <p style={{ background: "#ffffff", padding: 25 }}>{qty}</p>

      <Button
        onClick={() => {
          increment();
        }}
        // style={{ background: "#ffffff" }}
      >
        <AddIcon />
      </Button>
    </div>
  );
}
