import React from 'react';
import * as s from './Button.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  func: () => void;
  name: string;
  type: 'submit' | 'button';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ func, name, type, disabled, ...props }) => {
  return (
    <s.Button type={type} onClick={func} disabled={disabled} {...props}>
      {name}
    </s.Button>
  );
};

export default Button;
