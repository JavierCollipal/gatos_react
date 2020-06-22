import React from "react";
import GridList from "@material-ui/core/GridList";
import CatCard from "./CatCard";

const CatList = ({ cats, deleteCat, manageModal }) => {
  return (
    <GridList cols={3} spacing={4}>
      {cats.map((cat, index) => (
        <CatCard
          cat={cat}
          deleteCat={deleteCat}
          manageModal={manageModal}
          key={index}
          spacing={2}
        />
      ))}
    </GridList>
  );
};

export default CatList;
