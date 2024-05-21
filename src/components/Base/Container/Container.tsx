import React, { ReactNode } from 'react';
import * as s from './Container.styled';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => (
  <s.Container>{children}</s.Container>
);

export default Container;
