import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Artigos from './pages/Artigos';
import Treinamentos from './pages/Treinamentos';
import Sobre from './pages/Sobre';
import Global from './Styles/Global';
import Alunos from './pages/Alunos';
// import AdminConfigurations from './pages/AdminConfigurations';

function App() {
  return (
    <div>
      <Global />
      <Routes>
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/treinamentos" element={<Treinamentos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/alunos" element={<Alunos />} />
        {/* <Route path="/alunos/:id" element={<AlunosPage />} /> */}
        {/* <Route path="/admin_configurations" element={<AdminConfigurations />} /> */}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
