import React, { useState } from "react";
import CatTable from "./CatTable";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat } from "../../reducers/cats";
import CatForm from "./CatForm";

const Cats = ({ cats, addCat, fetchCat, deleteCat }) => {
  const [selectedCat, setSelectedCat] = useState({});
  const [dialog, setDialog] = useState(false);

  const manageDialog = (change) => setDialog(change);
  const handleUpdateModal = (cat) => {
    setSelectedCat(cat);
    manageDialog(true);
  };
  const handleDelete = (catId) => {
    //aqui vamos a llamar al dispatch de delete
    deleteCat(catId);
    manageDialog(false);
  };
  const handleFormSubmit = (payload) => {
    manageDialog(false);
    addCat(payload);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Button color="primary" onClick={() => manageDialog(true)}>
            Añade un nuevo gato
          </Button>
          <CatTable
            title={"tabla de gatos"}
            cats={cats}
            handleUpdateModal={handleUpdateModal}
          />
          <CatForm
            onSubmit={handleFormSubmit}
            manageDialog={manageDialog}
            dialogState={dialog}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
//esta funcion se encarga de pasar el estado que necesitamos como props
const mapStateToProps = (state) => {
  const { cats } = state;
  return { cats };
};
//esta funcion se encarga de pasar las acciones de la store como props de componentes
//y esto se logra creando una funcion que devuelve un objeto
const mapDispatchToProps = (dispatch) => ({
  addCat: (payload) => dispatch(addCat(payload)),
  fetchCat: () => dispatch(fetchCat()),
  //un setter seria el equivalente a una mutaction en vue
  deleteCat: (payload) => dispatch(deleteCat(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cats);
