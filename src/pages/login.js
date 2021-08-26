import React, { useState, useCallback, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  // use-http-only-cookies = yes;

  let history = useHistory();
  
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token") != null) history.goBack();
  }, [history]);



  function login() {
    axios
      .post("https://ce-strapi-server.herokuapp.com/auth/local", {
        identifier: email,
        password: password,
      })
      .then(function (response) {
        // console.log(response);
        // console.log(response.data.jwt)
        localStorage.setItem("token", response.data.jwt);
        // localStorage.setItem("user", JSON.stringify(response.data.user));
        history.push("/products");
      })
      .catch(function (error) {
        alert("unable to login");
        console.log(error);
      });
  }

  return (
    <div>
      {" "}
      <SiteHeader />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            // noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => login()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>

          <h1>{password}</h1>
          <h1>{email}</h1>
        </div>
      </Container>
    </div>
  );
}
