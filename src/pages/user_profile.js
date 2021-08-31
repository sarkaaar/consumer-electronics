import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import SiteHeader from "../components/SiteHeader";

import { useHistory } from "react-router-dom";

export default function ImgMediaCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") == null) history.push("/login");
  }, [history]);

  return (
    <div>
      <SiteHeader />
      <Grid
        container
        style={{ backgroundColor: "grey", marginTop: "200px", width: 900 }}
      >
        <Grid item style={{ backgroundColor: "white", margin: "auto" }}>
          <img
            src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            alt="img"
            height="300"
            style={{ backgroundColor: "" }}
          />
        </Grid>
        {!user ? (
          history.push("/login")
        ) : (
          <Grid item style={{ margin: "auto" }}>
            <h2>usename = {user.username}</h2>
            <h2>email = {user.email}</h2>
            <h2>role = {user.rol_}</h2>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
