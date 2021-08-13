import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400,
    padding: 20,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  console.log(props);
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.obj.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
