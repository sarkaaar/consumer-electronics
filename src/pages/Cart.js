import React from "react";
import SiteHeader from "../components/SiteHeader";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/counter";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  let history = useHistory();

  let total = 0;

  return (
    <div>
      <SiteHeader />
      <div style={{ marginTop: 150 }}>
        <Grid item style={{ display: "flex" }}>
          <h1 style={{ marginLeft: 35 }}>Item</h1>
          <h1 style={{ marginLeft: 115 }}>Title</h1>
          <h1 style={{ marginLeft: 115 }}>Price</h1>
          <h1 style={{ marginLeft: 115 }}>Quantity</h1>
          <h1 style={{ marginLeft: 115 }}>Total</h1>
        </Grid>

        {value.map((product) => (
          <Grid item>
            <div
              key={product.name}
              className="product"
              style={{ display: "flex" }}
            >
              <div style={{ width: 100 }}>
                <img
                  style={{ marginLeft: 25, height: "100px", zIndex: 1 }}
                  src={
                    product.images
                      ? product.images.name
                      : "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                  }
                  alt="product"
                />
              </div>
              <p style={{ display: "none" }}>
                {(total += product.price * product.quantity)}
              </p>
              <h3 style={{ marginLeft: 115 }}>{product.name}</h3>
              <h3 style={{ marginLeft: 115 }}>{product.price}</h3>
              <h3 style={{ marginLeft: 115 }}>{product.quantity}</h3>
              <h3 style={{ marginLeft: 115 }}>
                {product.quantity * product.price}
              </h3>

              <Button
                style={{ marginLeft: 125 }}
                size="small"
                color="primary"
                onClick={() => {
                  console.log(value._id);
                  dispatch(removeFromCart(value.indexOf(product)));
                }}
              >
                REMOVE
              </Button>
            </div>
          </Grid>
        ))}


        <div style={{ display: "flex" }}>
          <h1>Total = </h1>
          <h1 style={{ marginLeft: 250 }}>{total}</h1>
        </div>
        <Button
          style={{
            marginLeft: "250px",
            border: "2px solid black",
            fontWeight: "35px",
          }}
          size="small"
          color="primary"
          onClick={() => {
            axios
              .post(
                "https://ce-strapi-server.herokuapp.com/carts",
                { prod_id: value },
                {
                  headers: { Authorization: `Bearer ${token}` },
                }
              )
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
            history.push(`/checkout`);
          }}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}
