import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repositories from '../pages/Repository';


 const Rota: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/repositories/:repository*" element={<Repositories />} />
  </Routes>
)

export default Rota;