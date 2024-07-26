import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Inicio from './components/inicio/Inicio'
import Servicio1 from './components/servicio1/Servicio';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/servicio1" element={<Servicio1/>} />
          <Route path="/" element={<Inicio/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
