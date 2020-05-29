import React from 'react';
import CatTable from './components/cats/CatTable'
import './App.css';
import Title from "./components/concepts/Title";


function App() {
  return (
    <div className="App">
        <Title name="Cat Apps"/>
      <CatTable title="tabla de gatos"/>
    </div>
  );
}

export default App;
