import './App.css';
import React from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Home, Detalle } from './paginas/index'


const App = () => {

  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} /> */}
          <Route exact path="/objeto/:objetoId" element={< Detalle />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;