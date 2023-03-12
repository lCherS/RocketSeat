import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/Signin';
import SignUp from './pages/Singup';

function App() {
  return (
    <>
    <SignIn />
    {/* <SignUp /> */}
    <GlobalStyle />
    </>
  );
}

export default App;
