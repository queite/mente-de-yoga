// import React, { useContext } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import Home from './pages/Home/Home';
// import Cursos from './pages/Cursos/Cursos';
import CursosInstrutores from './pages/Cursos/Instrutores/CursosInstrutores';
// import Artigos from './pages/Artigos';
// import Treinamentos from './pages/Treinamentos';
import Sobre from './pages/Sobre/Sobre';
import Global from './Styles/Global';
// import Alunos from './pages/Alunos';
// import dark from './Styles/dark';
import light from './Styles/light';
// import Context from './context/context';
// import AdminConfigurations from './pages/AdminConfigurations/AdminConfigurations';

function App() {
  // const { theme } = useContext(Context);
  return (
    <div>
      {/* <ThemeProvider theme={theme === 'light' ? dark : light}> */}
      <ThemeProvider theme={light}>
        <Global />
        <Routes>
          {/* <Route path="/cursos" element={<Cursos />} /> */}
          {/* <Route path="/cursos/instrutores" element={<CursosInstrutores />} /> */}
          {/* <Route path="/artigos" element={<Artigos />} /> */}
          {/* <Route path="/treinamentos" element={<Treinamentos />} /> */}
          <Route path="/sobre" element={<Sobre />} />
          {/* <Route path="/alunos" element={<Alunos />} /> */}
          {/* <Route path="/alunos/:id" element={<AlunosPage />} /> */}
          {/* <Route path="/adminconfigurations" element={<AdminConfigurations />} /> */}
          <Route exact path="/" element={<CursosInstrutores />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
