import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";
import CatActions from "./CatActions";

const mockCat = { name: 'lanita', age: 1, breed: 'angora', imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'};
const catData = [
    { name: 'Lanita', breed: 'Angora', age: 237, imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'},
    { name: 'Plomo', breed: 'Angora', age: 27, imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'},
    { name: 'Micha', breed: 'Carey', age: 3, imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'},
];

const Cats = () => {
    const [cats, setCats] =  useState(catData);
    const [modal, setModal] = useState(false);
    const [selectedCat, setSelectedCat] = useState(mockCat);

    const changeCatData = (action) => {
        switch (action) {
            case 'CHANGE':
                setCats([
                    { name: 'Lanita cambiada', breed: 'Angora cambiado', age: 237},
                    { name: 'Plomo cambiado', breed: 'Angora cambiado', age: 27},
                    { name: 'Micha', breed: 'Carey', age: 3},
                ]);
                break;
            case 'RESTORE':
                setCats(catData);
                break;
            default:
                break;
        }

    };
    const manageModal = (change) => setModal(change);
    const handleUpdateModal = (cat) => {
        setSelectedCat(cat);
        manageModal(true);
    };
    const addCat = (cat) => {
        setCats(cats.concat(cat));

    };
    return (
        <div>
            <CatActions changeCatData={changeCatData}/>
            <button onClick={() => addCat(mockCat)}> Agregar un gato de manera inmutable</button>
            <CatTable title={"tabla de gatos"} cats={cats} handleUpdateModal={handleUpdateModal} />
            { modal ? <CatModal cat={selectedCat}  manageModal={manageModal}/> : null }
        </div>
    )
};

export default Cats;
