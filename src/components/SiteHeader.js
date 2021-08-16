import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SiteHeader() {
  const token = localStorage.getItem("token");
  // console.log(token);

  const history = useHistory();
  // console.log(localStorage.getItem("token"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">CONSUMER ELECTRONICS</Link>
          </Typography>
          <div>
            <Button color="inherit">
              <Link to={`/`} activeClassName="active">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to={`/products`} activeClassName="active">
                Products
              </Link>
            </Button>
          </div>
          <div>
            {" "}
            <Button color="inherit">
              <Link to={`/Categories`} activeClassName="active">
                Categories
              </Link>
            </Button>
            <Button color="inherit">
              <Link to={`/cart`} activeClassName="active">
                Cart
              </Link>
            </Button>
          </div>
          {token ? (
            <div>
              <Button
                color="inherit"
                onClick={() => {
                  console.log("logout");
                  localStorage.clear();
                  history.push("/");
                }}
              >
                Logout
              </Button>
              <Button color="inherit">
                <Link to={`/profile`} activeClassName="active">
                  PROFILE
                </Link>
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit">
                <Link to={`/login`} activeClassName="active">
                  Login
                </Link>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
