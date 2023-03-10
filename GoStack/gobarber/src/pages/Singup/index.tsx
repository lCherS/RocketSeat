import React from 'react';
import {FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';

import { Background, Container, Content } from './style';

import Input from '../../components/inputs';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => (
<Container>
<Background />
  <Content>
    <img src={logoImg} alt="Logo" />
    
    <form>
      <h1>Faça seu Cadastro</h1>

      <Input icon={FiUser} name='name' placeholder='Seu Nome' />
      <Input icon={FiMail} name='email' placeholder='E-mail' />
      <Input icon={FiLock} name='password' placeholder='senha' type="password" />
      <Button type='submit'>Cadastrar</Button>

    </form>
    <a href="login"><FiArrowLeft /> Voltar para Logon</a>
  </Content>
</Container>

)

export default SignUp