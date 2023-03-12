import React, {useCallback, useRef} from 'react';
import * as Yup from 'yup';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import { Background, Container, Content } from './style';

import Input from '../../components/inputs';
import Button from '../../components/button';

import logoImg from '../../assets/logo.svg';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormHandles } from '@unform/core';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object)  => {

    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha Obrigatória'),
      })

      await schema.validate(data, {
        abortEarly: false,
      });


    } catch (err) {
      console.log('Erro: ' + err);
      const errors = getValidationErrors(err);
      // console.log(err.name);
      // console.log(err.path);
      // const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input icon={FiMail} name='email' placeholder='E-mail' />
          <Input icon={FiLock} name='password' placeholder='senha' type="password" />
          <Button type='submit'>Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login"><FiLogIn /> Criar conta</a>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn