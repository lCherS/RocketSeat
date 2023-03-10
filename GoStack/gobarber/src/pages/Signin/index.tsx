import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import { Background, Container, Content } from './style';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
<Container>
  <Content>
    <img src={logoImg} alt="Logo" />
    
    <form>
      <h1>Faça seu Logon</h1>

      <input placeholder='email' />
      <input placeholder='senha' type="password" />
      <button type='submit'>Entrar</button>

      <a href="forgot">Esqueci minha senha</a>
    </form>
    <a href="login"><FiLogIn /> Criar conta</a>
  </Content>
  <Background />
</Container>

)

export default SignIn