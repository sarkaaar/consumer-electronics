import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ImgMediaCard from "./product_card";
import { Grid, makeStyles } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
// import zIndex from "@material-ui/core/styles/zIndex";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function Products() {
  const [cart, setCart] = useState([]);
  const [neo, setNeo] = useState([]);

  useEffect(() => {
    setCart((cart) => {
      console.log(cart);
      // cart = localStorage.getItem("id");

      // localStorage.setItem("id", cart);
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
  const { loading, error, data } = useFetch("http://localhost:1337/products");
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

  function AddToCart_(id) {
    localStorage.setItem("id", cart);
    // // const var = null;

    // localStorage.getItem("id").length() === 0
    //   ? localStorage.setItem("id", id)
    //   : // localStorage.setItem("id", {localStorage.getItem("id"),id})
    //     console.log("No Product Selected");

    setCart([...cart, id]);
    
    axios.get("http://localhost:1337/products/" + id).then((res) => {
      // var dt = { ...neo };
      setNeo(...cart, ...res.data);

      console.log(neo);
    });
    // console.log(cart);

    // console.log("Added To cart");

    // useEffect(() => {
    //   setCart([...cart, id]);
    // }, [cart]);
    // console.log("add Cartto cart")

    // localStorage.setItem("id",id)
    // console.log(localStorage.getItem("id") )

    // setCart(cart.push(id))
    // console.log(cart)

    // axios
    //   .post(
    //     "http://localhost:1337/carts",{prod_id:id}
    //     // ,
    //     // {
    //     //   headers: { Authorization: `Bearer ${token}` },
    //     // }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

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
            {/* <Grid item xs={2} sm={4} md={6} > */}
            <div key={product.id} className="product" style={{ zIndex: -1 }}>
              <ImgMediaCard obj={product} xs={2} sm={4} md={6} />
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  AddToCart_(product.id);
                  // AddToCart_(prod);
                }}
              >
                CART
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  console.log(cart);
                }}
              >
                SHOW
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  console.log(localStorage.getItem("cart"));
                }}
              >
                localStorage
              </Button>
              {/* <ImgMediaCard obj={product} /> */}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
