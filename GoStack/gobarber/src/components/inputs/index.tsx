import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';
import { Container, Error } from './styles';

interface InpurtProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InpurtProps> = ({name, icon: Icon, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const  handleInputBlur = useCallback(() => {
    setIsFocused(false);
    
    setIsFilled(!!inputRef.current?.value);
    // é a mesma coisa que a baixo
    // if(inputRef.current?.value) {
    //   setIsFilled(true);
    // } else {
    //   setIsFilled(false);
    // }

  }, [])

  const  handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon &&  <Icon size={20} />}
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <Error title={error}> <FiAlertCircle color="#c53030" size={20} /></Error>}
    </Container>
    )
  }
export default Input;