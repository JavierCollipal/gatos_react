import React from "react";
import HomeInfo from "./HomeInfo";
import Grid from "@material-ui/core/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";

const img1 = "./home/homeCat.jpg";

const Home = () => {
  return (
    <Grid container direction="column">
      <LazyLoadImage src={img1} height={300} />
      <HomeInfo />
    </Grid>
  );
};
export default Home;
