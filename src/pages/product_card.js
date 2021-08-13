import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
// import AddToCart from "./cart/AddToCart";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 500,
  },
});

export default function ImgMediaCard(props) {
  const prod = props.obj;
  const classes = useStyles;
  const [cart, setCart] = useState([]);
  let history = useHistory();
  const token = localStorage.getItem("token");
  const [cartTotal, setCartTotal] = useState([]);
  const [local, setLocal] = useState(true);

  // useEffect(() => {
  //   total();
  // }, [cart]);

  // console.log("add to cart");
  useEffect(() => {
    // setCartTotal([...cart]);
    // console.log(cartTotal)
  });

  function AddToCart_() {
    // local ? localStorage.setItem("id", null) : setLocal(false);
    // // const var = null;

    // localStorage.getItem("id").length() === 0
    //   ? localStorage.setItem("id", id)
    //   : // localStorage.setItem("id", {localStorage.getItem("id"),id})
    //     console.log("No Product Selected");

    setCart([...cart, prod.id]);
    console.log(cart);

    // console.log("Added To cart");

    // useEffect(() => {
    //   setCart([...cart, id]);
    // }, [cart]);
    // console.log("add to cart")

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
          <Typography gutterBottom variant="h5" component="h2">
            {prod.name}
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            {prod.price}
          </Typography>

          <Typography variant="h5" color="textSecondary" component="p">
            {prod.description}
          </Typography>
          <rating />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          // onClick={() => {
          //   AddToCart_();
          //   // AddToCart_(prod);
          // }}
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
