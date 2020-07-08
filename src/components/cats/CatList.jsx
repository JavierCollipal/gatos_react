import React from "react";
import Grid from "@material-ui/core/Grid";
import CatCard from "./CatCard";

const CatList = ({ cats, handleDelete, handleUpdate }) => {
  const cardsArray = cats.map((cat) => (
    <Grid item xs={4} key={cat.id} className="catCard">
      <CatCard
        cat={cat}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        data-cy-cat-card
      />
    </Grid>
  ));
  return (
    <Grid container spacing={1}>
      {cardsArray}
    </Grid>
  );
};

export default CatList;
