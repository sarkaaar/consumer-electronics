import React from "react";
import { NavLink } from "react-router-dom";
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

  const history = useHistory();
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
            <NavLink to="/">CONSUMER ELECTRONICS</NavLink>
          </Typography>
          <div>
            <Button color="inherit">
              <NavLink to={`/`} activeClassName="active">
                Home
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to={`/products`} activeClassName="active">
                Products
              </NavLink>
            </Button>
          </div>
          <div>
            {" "}
            <Button color="inherit">
              <NavLink to={`/Categories`} activeClassName="active">
                Categories
              </NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to={`/cart`} activeClassName="active">
                Cart
              </NavLink>
            </Button>
          </div>
          {token ? (
            <div>
              <Button color="inherit">
                <NavLink to={`/myOrders`} activeClassName="active">
                  My Orders
                </NavLink>
              </Button>
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
                <NavLink to={`/profile`} activeClassName="active">
                  PROFILE
                </NavLink>
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit">
                <NavLink to={`/login`} activeClassName="active">
                  Login
                </NavLink>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
