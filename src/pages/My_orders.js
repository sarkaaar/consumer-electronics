import React, { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { Button, Grid } from "@material-ui/core";
import axios from "axios";

export default function My_orders() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("https://ce-strapi-server.herokuapp.com/orders")
      .then((response) => {
        localStorage.setItem("order_response", response.data);
        setOrder(response.data);
        console.log("Data Fetched Sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <SiteHeader />

      <div style={{ marginTop: 150, marginLeft: "5%", marginRight: "5%" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            console.log(user.email);
          }}
        >
          CHECKOUT
        </Button>

        <Grid item style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Order ID</h1>
          <h1>Date</h1>
          <h1>Products</h1>
          <h1>Address</h1>
          <h1>Bill</h1>
        </Grid>

        {order.map((record) => (
          <Grid item>
            <div key={record._id}>
              {user.email === record.user_credentials.email ? (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>{record._id}</h3>
                  <h3>{record.published_at}</h3>

                  {[record.products.value].map((product) => (
                    <Grid item>
                      <div key={product._id}>
                        {product.map((item) => (
                          <Grid item>
                            <div key={item._id}>
                              <h3>{item.name}</h3>
                            </div>
                          </Grid>
                        ))}
                      </div>
                    </Grid>
                  ))}
                  <div>
                    <h3 style={{ marginLeft: 115 }}>
                      {record.payment_details.name}
                    </h3>
                    <h3 style={{ marginLeft: 115 }}>
                      {record.payment_details.address}
                    </h3>
                    <h3 style={{ marginLeft: 115 }}>
                      {record.payment_details.city}
                    </h3>
                    <h3 style={{ marginLeft: 115 }}>
                      {record.payment_details.postalcode}
                    </h3>
                  </div>

                  <h1>Bill</h1>
                </div>
              ) : (
                <div style={{display:"none"}}>
                  <h1>Tou have nothing here</h1>
                  <h1>Go get some stuff</h1>
                </div>
              )}
            </div>
            <hr />
          </Grid>
        ))}

        <Button
          style={{
            marginLeft: "250px",
            border: "2px solid black",
            fontWeight: "35px",
          }}
          size="small"
          color="primary"
          onClick={() => {
            console.log(order);
          }}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
}
