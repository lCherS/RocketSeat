import React, {useCallback, useRef } from 'react';
import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';


import { Background, Container, Content } from './style';

import Input from '../../components/inputs';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object)  => {

    try {
      formRef.current?.setErrors({})
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
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
  return(
<Container>
<Background />
  <Content>
    <img src={logoImg} alt="Logo" />
    
    <Form ref={formRef} onSubmit={handleSubmit}>
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