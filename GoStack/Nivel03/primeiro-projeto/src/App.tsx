import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global'
import Rota from  './routes';

 const App: React.FC = () => (
  <>
  <BrowserRouter>
  <Rota />
  </BrowserRouter>
  <GlobalStyle />
  </>
)

export default App