import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SiteHeader from "../components/SiteHeader";
import Quantity from "../components/Quantity";

const useStyles = makeStyles({
  root: {},
});

export default function ImgMediaCard(props) {
  // const styles = useStyles();
  const { id } = useParams();
  console.log(id);

  const { loading, error, data } = useFetch(
    "http://localhost:1337/products/" + id
  );
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
    <div>
      <SiteHeader />

      <div
        style={{
          width: 1000,
          height: 600,
          display: "flex",
          background: "#dddddd",
          padding: 25,
          justifySelf: "center",
          margin: "auto",
          marginTop: 150,
          borderRadius: 25,
        }}
      >
        <div styles={{ width: "200px", height: "200px" }}>
          <img
            src={
              !data.images
                ? "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                : data.images.name
            }
            crop="fill"
            alt="img"
          />
        </div>
        <div style={{ marginLeft: 100 }}>
          <h1>{data.name}</h1>
          <h2>Rs. {data.price} /=</h2>
          <h3>{data.description}</h3>

          <Quantity />

          <Button size="large" color="primary">
            CART
          </Button>
          <Button size="large" color="primary">
            BUY
          </Button>
        </div>
      </div>
    </div>
  );
}
