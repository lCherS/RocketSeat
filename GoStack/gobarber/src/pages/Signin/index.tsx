import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import { Background, Container, Content } from './style';

import Input from '../../components/inputs';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
<Container>
  <Content>
    <img src={logoImg} alt="Logo" />
    
    <form>
      <h1>Faça seu Logon</h1>

      <Input icon={FiMail} name='email' placeholder='E-mail' />
      <Input icon={FiLock} name='password' placeholder='senha' type="password" />
      <Button type='submit'>Entrar</Button>

      <a href="forgot">Esqueci minha senha</a>
    </form>
    <a href="login"><FiLogIn /> Criar conta</a>
  </Content>
  <Background />
</Container>

)

export default SignIn