import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ImgMediaCard from "./product_card";
import { Grid, makeStyles } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

export default function Products() {
  const [cart, setCart] = useState([]);

  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  useEffect(() => {
    setCart((cart) => {
      console.log(cart);
      return cart;
    });
  }, [cart]);

  const useStyles = makeStyles((theme) => ({
    addBtn: {
      position: "fixed",
      bottom: "25px",
      right: "25px",
      zIndex: 1,
    },
  }));
  const classes = useStyles();

  const { loading, error, data } = useFetch("https://ce-strapi-server.herokuapp.com/products");
  // const { loading, error, data } = useFetch("http://localhost:1337/products");

  
  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>Error 404...</h2>
      </div>
    );

  return (
    <div className="product_body">
      <SiteHeader style={{ zIndex: 2 }} />

      <Link to="/add_product">
        <Fab color="primary" aria-label="add" className={classes.addBtn}>
          <AddIcon />
        </Fab>
      </Link>

      <Grid
        container
        spacing={1}
        direction="row"
        style={{ justifyContent: "space-between", marginTop: 65, zIndex: -1 }}
      >
        {data.map((product) => (
          <Grid item>
            <div key={product.id} className="product" style={{ zIndex: -1 }}>
              <ImgMediaCard obj={product} xs={2} sm={4} md={6} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
