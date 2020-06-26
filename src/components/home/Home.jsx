import React from "react";
import HomeInfo from "./HomeInfo";
import Grid from "@material-ui/core/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";

const imgUrl = "./home/homeCat.png";

const Home = () => {
  return (
    <Grid container direction="column">
      <LazyLoadImage src={imgUrl} height={300} />
      <HomeInfo />
    </Grid>
  );
};
export default Home;
