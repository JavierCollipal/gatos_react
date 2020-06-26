import React from "react";
import HomeInfo from "./HomeInfo";
import Grid from "@material-ui/core/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CardMedia from "@material-ui/core/CardMedia";

/*const imgUrl = "./home/homeCat.png";*/
const imgUrl = "https://wallpaperstock.net/wallpapers/thumbs1/34549wide.jpg";
const Home = () => {
  return (
    <div>
      <CardMedia src={imgUrl} />
      <Grid container direction="column">
        <HomeInfo />
      </Grid>
    </div>
  );
};
export default Home;
