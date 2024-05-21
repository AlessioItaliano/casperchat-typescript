import React, { ReactNode } from 'react';
import * as s from './Section.styled';

interface Props {
  children: ReactNode;
}

const Section: React.FC<Props> = ({ children }) => (
  <s.Section>{children}</s.Section>
);

export default Section;
