import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat } from "../../reducers/cats";

const Cats = ({ cats, addCat, fetchCat, deleteCat }) => {
  const [selectedCat, setSelectedCat] = useState({});
  const [modal, setModal] = useState(false);

  const manageModal = (change) => setModal(change);
  const handleUpdateModal = (cat) => {
    setSelectedCat(cat);
    manageModal(true);
  };
  const handleDelete = (catId) => {
    //aqui vamos a llamar al dispatch de delete
    deleteCat(catId);
    manageModal(false);
  };
  const handleFormSubmit = (payload) => {
    addCat(payload);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Button color="primary" onClick={() => manageModal(true)}>
            Añade un nuevo gato
          </Button>
          <CatTable
            title={"tabla de gatos"}
            cats={cats}
            handleUpdateModal={handleUpdateModal}
          />
          <Dialog
            open={modal}
            onClose={() => manageModal(false)}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Crear gato</DialogTitle>
            <DialogContent>
              <CatModal
                cat={selectedCat}
                manageModal={manageModal}
                modalState={modal}
                deleteCat={handleDelete}
                onSubmit={handleFormSubmit}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => manageModal(false)} color="primary">
                Cerrar
              </Button>
              <Button color="primary">Crear</Button>
            </DialogActions>
          </Dialog>
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
