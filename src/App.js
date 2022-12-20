import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Home, Pokemon } from './pages/index';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route exact path = '/' element={<Home />} />
          <Route exact path="/pokemon/:pokemonId" element={<Pokemon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;