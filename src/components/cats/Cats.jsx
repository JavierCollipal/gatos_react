import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat } from "../../reducers/cats";
import CatForm from "./CatForm";
import { defaultCatImg } from "../../utils/mock/cats";

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
    payload.id = Date.now();
    payload.imageUrl = defaultCatImg;
    addCat(payload);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
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
          <CatForm onSubmit={handleFormSubmit} />
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
