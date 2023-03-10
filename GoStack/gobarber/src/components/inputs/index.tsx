import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface InpurtProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InpurtProps> = ({icon: Icon, ...rest}) => (
  <Container>
   {Icon &&  <Icon size={20} />}
    <input {...rest}></input>
    </Container>
)

export default Input;