import React from "react";
import HomeInfo from "./HomeInfo";
import Grid from "@material-ui/core/Grid";

const img1 = "./home/homeCat.jpg";

const Home = () => {
  return (
    <Grid container direction="column">
      <img src={img1} style={{ width: "inherit", height: 300 }} alt="homeCat" />
      <HomeInfo />
    </Grid>
  );
};
export default Home;
