import React, {useCallback} from 'react';
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';


import { Background, Container, Content } from './style';

import Input from '../../components/inputs';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object)  => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (e) {
      console.log('Erro: ' + e);
    }
  }, [])
  return(
<Container>
<Background />
  <Content>
    <img src={logoImg} alt="Logo" />
    
    <Form onSubmit={handleSubmit}>
      <h1>Faça seu Cadastro</h1>

      <Input icon={FiUser} name='name' placeholder='Seu Nome' />
      <Input icon={FiMail} name='email' placeholder='E-mail' />
      <Input icon={FiLock} name='password' placeholder='senha' type="password" />
      <Button type='submit'>Cadastrar</Button>

    </Form>
    <a href="login"><FiArrowLeft /> Voltar para Logon</a>
  </Content>
</Container>
  )
}

export default SignUp