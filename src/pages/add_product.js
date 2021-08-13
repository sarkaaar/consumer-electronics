import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import axios from "axios";
import SiteHeader from "../components/SiteHeader";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div>
      <SiteHeader />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            ADD PRODUCT
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name_"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="description"
              label="Description"
              id="description"
              // value={description}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="price"
              label="price"
              name="price"
              // value={price}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="quantity"
              name="quantity"
              // value={quantity}
              autoFocus
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Published"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // onClick={(c)={
              //     axios.post("http://localhost:1337/products",{name_,description,price,quantity})
              // }}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
