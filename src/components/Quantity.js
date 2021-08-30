import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export default function Quantity(props) {
  // const classes = useStyles();
  const [qty, setQty] = useState(1);

  function increment() {
    setQty(qty + 1);
  }

  function decrement() {
    setQty(qty - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        marginLeft: 15,
        border: "2px solid black",
        background: "grey",
      }}
    >
      <Button
        disabled={qty === 1 ? true : false}
        onClick={() => {
          decrement();
        }}
      >
        <RemoveIcon />
      </Button>

      <p style={{ background: "#ffffff", padding: 25 }}>{qty}</p>
      {console.log(qty)}
      <Button
        onClick={() => {
          increment();

        }}
      >
        <AddIcon />
      </Button>
    {/* {return qty} */}
    </div>
  );
}
