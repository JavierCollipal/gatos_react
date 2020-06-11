import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";

const mockCat = { id: Date.now(),name: 'lanita', age: 1, breed: 'angora', imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'};
const catData = [];

const Cats = () => {
    const [cats, setCats] =  useState(catData);
    const [modal, setModal] = useState(false);
    const [selectedCat, setSelectedCat] = useState(mockCat);
    const generateMockCat = () =>({ id: Date.now(),name: 'lanita', age: 1, breed: 'angora', imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'});
    const manageModal = (change) => setModal(change);
    const handleUpdateModal = (cat) => {
        setSelectedCat(cat);
        manageModal(true);
    };
    const addCat = () => {
        setCats(cats.concat(generateMockCat()));
    };
    return (
        <div>
            <button onClick={() => addCat()}> Agregar un gato de manera inmutable</button>
            <CatTable title={"tabla de gatos"} cats={cats} handleUpdateModal={handleUpdateModal} />
            { modal ? <CatModal cat={selectedCat}  manageModal={manageModal}/> : null }
        </div>
    )
};

export default Cats;
