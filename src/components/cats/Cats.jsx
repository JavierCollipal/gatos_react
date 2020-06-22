import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCat, fetchCat, deleteCat, updateCat } from "../../reducers/cats";
import CatForm from "./CatForm";
import CatList from "./CatList";

const Cats = ({ cats, addCat, fetchCat, deleteCat, updateCat }) => {
  const [formData, setFormData] = useState({});
  const [dialog, setDialog] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const manageDialog = (change) => setDialog(change);
  const handleUpdate = (cat) => {
    setFormData(cat);
    setUpdateMode(true);
    //ver como pasarle los valores a form redux para actualizar el gato
    manageDialog(true);
  };
  const handleDelete = (catId) => {
    deleteCat(catId);
  };
  const handleCreate = () => {
    manageDialog(true);
    setUpdateMode(false);
  };
  const handleFormSubmit = (payload) => {
    //arreglo momentaneo para el error de redux-form(initialValues no esta pasando la id si es update)
    if (updateMode) payload.id = formData.id;
    manageDialog(false);
    updateMode ? updateCat(payload) : addCat(payload);
  };

  useEffect(() => {
    console.log("trigger al hook de efecto como si fuera componentDidMount");
    fetchCat();
  }, [fetchCat]);
  useEffect(() => {
    console.log("cambio el props de gatos");
  }, [cats]);
  return (
    <div>
      <Button color="primary" onClick={handleCreate}>
        Añade un nuevo gato
      </Button>
      <CatList
        cats={cats}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
      <CatForm
        onSubmit={handleFormSubmit}
        manageDialog={manageDialog}
        dialogState={dialog}
        updateMode={updateMode}
        initialValues={formData}
      />
    </div>
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
