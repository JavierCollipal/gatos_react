import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat, updateCat } from "../../reducers/cats";
import CatForm from "./CatForm";
import CatList from "./CatList";

const Cats = ({ cats, addCat, fetchCat, deleteCat, updateCat }) => {
  const [formData, setformData] = useState({});
  const [dialog, setDialog] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const manageDialog = (change) => setDialog(change);
  const handleUpdateModal = (cat) => {
    setformData(cat);
    setUpdateMode(true);
    //ver como pasarle los valores a form redux para actualizar el gato
    manageDialog(true);
  };
  const handleDelete = (catId) => {
    //aqui vamos a llamar al dispatch de delete
    deleteCat(catId);
  };
  const handleCreate = () => {
    manageDialog(true);
    setUpdateMode(false);
  };
  const handleFormSubmit = (payload) => {
    manageDialog(false);
    updateMode ? updateCat(payload) : addCat(payload);
  };
  return (
    <Box>
      <Grid container>
        <Button color="primary" onClick={handleCreate}>
          Añade un nuevo gato
        </Button>
        <Grid item xs={12}>
          <CatList
            cats={cats}
            deleteCat={deleteCat}
            manageModal={handleDelete}
          />
        </Grid>
        <Grid item xs={12}>
          <CatForm
            onSubmit={handleFormSubmit}
            manageDialog={manageDialog}
            dialogState={dialog}
            updateMode={updateMode}
            initialValues={formData}
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
  updateCat: (payload) => dispatch(updateCat(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cats);
