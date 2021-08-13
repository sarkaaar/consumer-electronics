import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SiteHeader from "../components/SiteHeader";
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400,
    padding: 20,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default function Cart() {
  return (
    <div>
      <SiteHeader />
      <Button
        style={{ marginTop: 125 }}
        onClick={console.log("Hello World")}
      >
        {" "}
        press me
      </Button>
    </div>
  );
}
