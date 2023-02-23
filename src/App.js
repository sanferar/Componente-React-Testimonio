import './App.css';
import React from 'react';
import { Testimonio } from './componenetes/Testimonio';
function App() {
  return (
    <div className="App">
      <div className='App__contenedor__principal'>
        <h1 className='App__contenedor__principal__titulo'>
        React Testimonio
        </h1>
        <Testimonio
          nombre='Jose Luis'
          cargo='Front-end developer'
          testimonio='Esta empresa mola un huevo y parte de otro'
        />
      </div>
      
    </div>
  );
}

export default App;
