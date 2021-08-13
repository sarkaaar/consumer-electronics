import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import SiteHeader from "../components/SiteHeader";

import { useHistory } from "react-router-dom";
import axios from "axios";



export default function ImgMediaCard() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  // const [use_data, setData] = useState("");

  let history = useHistory();

  // const token = localStorage.getItem("token");

  // const [state, setState] = useState(
  //   "{items:[],isLoaded: false,redirectToReferrer:false,token:''}"
  // );

  //   this.state={
  //     items:[],
  //     isLoaded: false,
  //     redirectToReferrer:false,
  //     token:''
  // }

  // axios
  // .get("http://localhost:1337/users/me", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //     setState({
  //       items: res.data /*set response data in items array*/,
  //       isLoaded: true,
  //       redirectToReferrer: false,
  //     });
  //   });

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     const fetchData = async()=>{
  //         setLoading(true)

  //         try {
  //           axios
  // .get("http://localhost:1337/users/me", {
  //   headers: { Authorization: `Bearer ${token}` },
  // })
  // .then((res) => {
  //   console.log(res.data);
  //   setData(res.data);

  //   setLoading(false);

  // })}

  // console.log(use_data);
  // const classes = useStyles();
  // const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    if (localStorage.getItem("token") == null) history.push("/login");
  }, [history]);

  return (
    <div>
      <SiteHeader />
      <Grid container style={{backgroundColor: "grey" , marginTop: "200px", width:900 }}>
        <Grid item style={{ backgroundColor: "white" , margin:"auto"}}>
          <img
            src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            alt="img"
            height="300"
            style={{ backgroundColor: "" }}
          />
        </Grid>
        {!user ? (
          history.push("/login")
        ) : (
          <Grid item style={{  margin:"auto"}}>
            <h2>usename =  {user.username}</h2>
            {/* <h1></h1> */}

            <h2>email =  {user.email}</h2>
            {/* <h1></h1> */}

            <h2>role =  {user.rol_}</h2>
            {/* <h1></h1> */}
          </Grid>
        )}
      </Grid>
    </div>
  );
}
