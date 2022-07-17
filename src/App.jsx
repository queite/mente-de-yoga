import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipe from './pages/Equipe';
import Servicos from './pages/Servicos';
import Blog from './pages/Blog';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Galeria from './pages/Galeria';
import Global from './Styles/Global';
import ServicosDetalhes from './pages/ServicosDetalhes';
import EquipeDetalhes from './pages/EquipeDetalhes';

function App() {
  return (
    <div>
      <Global />
      <Routes>
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/equipe/:id" element={<EquipeDetalhes />} />
        <Route path="/servicos/" element={<Servicos />} />
        <Route path="/servicos/:id" element={<ServicosDetalhes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
