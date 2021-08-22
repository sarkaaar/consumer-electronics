import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SiteHeader from "../components/SiteHeader";
import { useHistory } from "react-router-dom";

import axios from "axios";
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

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState();

  const token = localStorage.getItem("token");
  const history = useHistory();

  function addProd() {
    axios
      .post(
        "http://localhost:1337/products",
        {
          name: name,
          price: price,
          quantity: quantity,
          description: description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
      history.push('/add_product')
  }

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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="description"
              label="Description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}

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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
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
              onClick={() => {
                addProd();
              }}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
