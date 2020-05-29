import React from 'react';
import './App.css';
import Title from "./components/concepts/Title";
import Cats from "./components/cats/Cats";


function App() {
  return (
    <div className="App">
        <Title name="Cat Apps"/>
      <Cats/>
    </div>
  );
}

export default App;
