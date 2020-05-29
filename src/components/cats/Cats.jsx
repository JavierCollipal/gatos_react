import React from "react";
import CatTable from "./CatTable";
import CatModal from "./CatModal";

const mockCat = { name: 'lanita', age: 1, breed: 'angora', imageUrl: 'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg'};
const Cats = () => {
    return (
        <div>
            <CatTable title={"tabla de gatos"}/>
            <CatModal cat={mockCat}/>
        </div>
    )
};

export default Cats;
