import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Artigos from './pages/Artigos';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Global from './Styles/Global';

function App() {
  return (
    <div>
      <Global />
      <Routes>
        <Route path="/cursos/" element={<Cursos />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
