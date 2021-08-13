import React from "react";
import useFetch from "../hooks/useFetch";
// import Products from './Products';
// import { Link } from 'react-router-dom';
import ImgMediaCard from "./category_card";
import { Grid } from "@material-ui/core";
import SiteHeader from "../components/SiteHeader";

export default function Categories() {
  const { loading, error, data } = useFetch("http://localhost:1337/categories");
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
      <Grid container spacing={1} direction="row">
        {data.map((category) => (
          <div key={category.id} className="category">
            <ImgMediaCard obj={category} />
          </div>
        ))}
      </Grid>
    </div>
  );
}
