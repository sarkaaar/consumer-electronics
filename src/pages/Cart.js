import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SiteHeader from "../components/SiteHeader";
import { Button } from "@material-ui/core";
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
  return (
    <div>
      <SiteHeader />
      <Button
        style={{ marginTop: 125 }}
        onClick={console.log("Hello World")}
      >
        {" "}
        press me
      </Button>
    </div>
  );
}

// import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";
// import { Grid, makeStyles } from "@material-ui/core";
// import SiteHeader from "../components/SiteHeader";
// import Button from "@material-ui/core/Button";

// export default function Products() {
//   const useStyles = makeStyles((theme) => ({
//     addBtn: {
//       position: "fixed",
//       bottom: "25px",
//       right: "25px",
//       zIndex: 1,
//     },
//   }));

//   const [list,setList] = useState("")

//   const classes = useStyles();
//   const { loading, error, data } = useFetch("http://localhost:1337/products");
//   if (loading)
//     return (
//       <div>
//         <h2>Loading...</h2>
//       </div>
//     );
//   if (error)
//     return (
//       <div>
//         <h2>Error 404...</h2>
//       </div>
//     );

//   return (
//     <div className="product_body">
//         <div>
//             <Grid container>
//                 <Grid item>{list.title}</Grid>
//                 <Grid item>{list.price}</Grid>
//                 <Grid item>{list.qty}</Grid>
//                 <Grid item>{list.t_price}</Grid>
//             </Grid>

//         </div>
//       <div>
//         <Button>CheckOut</Button>
//       </div>
//     </div>
//   );
// }
