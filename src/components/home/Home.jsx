import React from "react";
import BigImage from "./BigImage";
import Grid from "@material-ui/core/Grid";
const img1 =
  "https://cnnespanol2.files.wordpress.com/2019/05/grumpy-cat-foto.jpg?quality=100&strip=info";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BigImage
          message={"Puedes probar el CRUD de gatos con redux"}
          src={img1}
        />
      </Grid>
      <Grid item xs={12}>
        <BigImage
          message={"Divertirte  aumentando/disminuyendo un contador"}
          src={img1}
        />
      </Grid>
      <Grid item xs={12}>
        <BigImage
          message={"o consumir la api de https://thecatapi.com/"}
          src={img1}
        />
      </Grid>
    </Grid>
  );
};
export default Home;
