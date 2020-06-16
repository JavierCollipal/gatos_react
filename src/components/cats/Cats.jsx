import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat } from "../../reducers/cats";
import { mockCatFactory } from "../../utils/mock/cats";

const Cats = ({ cats, addCat, fetchCat, deleteCat }) => {
  const [selectedCat, setSelectedCat] = useState({});
  const [modal, setModal] = useState(false);

  const manageModal = (change) => setModal(change);
  const handleUpdateModal = (cat) => {
    setSelectedCat(cat);
    manageModal(true);
  };
  const handleAdd = () => {
    //aqui vamos a llamar al dispatch de add
    let temporalCat = mockCatFactory("lanita", 6, "angora");
    addCat(temporalCat);
  };
  const handleDelete = (catId) => {
    //aqui vamos a llamar al dispatch de delete
    deleteCat(catId);
    manageModal(false);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={() => handleAdd()}>
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
            deleteCat={handleDelete}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

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
