import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const mockCat = {
  id: Date.now(),
  name: "lanita",
  age: 1,
  breed: "angora",
  imageUrl:
    "https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg",
};
const catData = [];
const generateMockCat = () => ({
  id: Date.now(),
  name: "lanita",
  age: 1,
  breed: "angora",
  imageUrl:
    "https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg",
});

const Cats = () => {
  const [cats, setCats] = useState(catData);
  const [modal, setModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState(mockCat);

  const manageModal = (change) => setModal(change);
  const handleUpdateModal = (cat) => {
    setSelectedCat(cat);
    manageModal(true);
  };
  const addCat = (cat) => {
    setCats(cats.concat(cat));
  };
  const deleteCat = (catId) => {
    setCats(cats.filter((cat) => cat.id !== catId));
    manageModal(false);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={() => addCat(generateMockCat())}>
            Agregar un gato de manera inmutable
          </Button>
          <CatTable
            title={"tabla de gatos"}
            cats={cats}
            handleUpdateModal={handleUpdateModal}
          />
          <CatModal
            cat={selectedCat}
            manageModal={manageModal}
            modalState={modal}
            deleteCat={deleteCat}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cats;
