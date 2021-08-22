import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/counter";

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 500,
  },
});

export default function ImgMediaCard(props) {
  const prod = props.obj;
  let history = useHistory();

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // function AddToCart_() {
  //   setCart([...cart, prod.id]);
  //   console.log(cart);
  // }

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
          {/* <rating /> */}
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
                images:prod.images
              })
            );
            console.log(value);
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
