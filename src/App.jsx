import React from 'react';
import CatTable from './components/cats/CatTable'
import './App.css';
import ArrayRendering from "./components/concepts/ArrayRendering";
import ButtonAndMessage from "./components/concepts/ButtonAndMessage";
import Title from "./components/concepts/Title";

function App() {
  return (
    <div className="App">
        <Title name="Cat Apps"/>
        <ButtonAndMessage/>
      <CatTable name="funciono el componenAAAAAAAte"/>
        <ArrayRendering/>
    </div>
  );
}

export default App;
