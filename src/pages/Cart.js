import React from "react";
import SiteHeader from "../components/SiteHeader";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/counter";
import ImgMediaCard from "./product_card";
import { Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  let history = useHistory();

  return (
    <div>
      <SiteHeader />
      <div style={{ marginTop: 150 }}>
        {value.map((product) => (
          <Grid item>
            {/* <Grid item xs={2} sm={4} md={6} > */}
            <div key={product.name} className="product">
              <ImgMediaCard obj={product} xs={2} sm={4} md={6} />
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  dispatch(removeFromCart(product.id));
                  console.log(value);
                }}
              >
                REMOVE
              </Button>
            </div>
          </Grid>
        ))}

        <Button
          size="small"
          color="primary"
          onClick={() => {
            // console.log("hello world");
            console.log(value);
          }}
        >
          CART
        </Button>

        <Button
          size="small"
          color="primary"
          onClick={() => {
            axios
              .post(
                "http://localhost:1337/carts",
                { prod_id: value },
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
              history.push(`/checkout`)
          
            }}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}
