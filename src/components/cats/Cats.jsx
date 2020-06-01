import React, { useState } from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";

const mockCat = { name: 'lanita', age: 1, breed: 'angora', imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'};
const catData = [
    { name: 'Lanita', breed: 'Angora', age: 237},
    { name: 'Plomo', breed: 'Angora', age: 27},
    { name: 'Micha', breed: 'Carey', age: 3},
];
const Cats = () => {
    const [cats , setCats] =  useState(catData);

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
    return (
        <div>
            <CatTable title={"tabla de gatos"} cats={cats}/>
            <CatModal cat={mockCat}/>
            <button onClick={() => changeCatData('CHANGE')}>Cambiar la data de gatos</button>
            <button onClick={() => changeCatData('RESTORE')}>Restaurar la data gatos</button>
        </div>
    )
};

export default Cats;
