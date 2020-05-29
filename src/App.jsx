import React from 'react';
import CatTable from './components/cats/CatTable'
import './App.css';
import Title from "./components/concepts/Title";
import CatModal from "./components/cats/CatModal";

function App() {
    const catObject = {name: "lanita",age:2, breed:"angora"};
  return (
    <div className="App">
        <Title name="Cat Apps"/>
      <CatTable title="tabla de gatos" cats={["lanita","esponjoso","plomo","micha"]}/>
      <CatModal cat={catObject}/>
    </div>
  );
}

export default App;
