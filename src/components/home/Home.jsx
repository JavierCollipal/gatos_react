import React from "react";
import HomeInfo from "./HomeInfo";
import Grid from "@material-ui/core/Grid";

/*const imgUrl = "./home/homeCat.png";*/
const Home = () => {
  return (
    <Grid container direction="column">
      <HomeInfo />
    </Grid>
  );
};
export default Home;
