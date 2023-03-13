import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/Signin';
import SignUp from './pages/Singup';

import AuthContext from './context/AuthContext';


function App() {
  return (
    <>
    <AuthContext.Provider value={{ name: 'CherS' }}>

    <SignIn />
    </AuthContext.Provider>

    {/* <SignUp /> */}
    <GlobalStyle />
    </>
  );
}

export default App;
