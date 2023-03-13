import { createContext } from 'react';

interface AuthContextTipe {
  name: string;
}

const AuthContext = createContext<AuthContextTipe>({} as AuthContextTipe);

export default AuthContext;