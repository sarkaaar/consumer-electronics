import React from "react";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/counter";
import { Grid } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";



export default function ImgMediaCard(props) {
  const prod = props.obj;
  let history = useHistory();

  const [qty, setQty] = useState(1);

  function increment() {
    setQty(qty + 1);
  }

  function decrement() {
    setQty(qty - 1);
  }
  const dispatch = useDispatch();

  return (
    <Card style={{ width: 400, height: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="product"
          height="300"
          image={
            !prod.images
              ? "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
              : prod.images.name
          }
          title="product"
        />
        <CardContent>
          <Grid container>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                {prod.name}
              </Typography>

              <Typography gutterBottom variant="h5" component="h2">
                {prod.price}
              </Typography>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  marginLeft: 15,
                  border: "2px solid black",
                  background: "grey",
                }}
              >
                <Button
                  disabled={qty === 1 ? true : false}
                  onClick={() => {
                    decrement();
                  }}
                >
                  <RemoveIcon />
                </Button>

                <p style={{ background: "#ffffff", padding: 25 }}>{qty}</p>
                {console.log(qty)}
                <Button
                  onClick={() => {
                    increment();
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(
              addToCart({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                images: prod.images,
                quantity: qty,
              })
            );
          }}
        >
          CART
        </Button>
        <Button size="small" color="primary">
          BUY
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => history.push(`/products/${+prod.id}`)}
        >
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
