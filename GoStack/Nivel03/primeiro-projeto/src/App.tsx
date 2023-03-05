import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Rota from  './routes';

 const App: React.FC = () => (
  <BrowserRouter>
  <Rota />
  </BrowserRouter>
)

export default App