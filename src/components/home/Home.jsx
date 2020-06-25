import React from "react";
import BigImage from "./BigImage";
import Grid from "@material-ui/core/Grid";
const Home = () => {
  return (
    <Grid continaer>
      <Grid item>
        <BigImage message={"Puedes probar el CRUD de gatos con redux"} />
      </Grid>
      <Grid item>
        <BigImage message={"Divertirte  aumentando/disminuyendo un contador"} />
      </Grid>
      <Grid item>
        <BigImage message={"o consumir la api de https://thecatapi.com/"} />
      </Grid>
    </Grid>
  );
};
export default Home;
