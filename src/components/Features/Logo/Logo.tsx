import React from 'react';
import { IoLogoSnapchat } from 'react-icons/io';

import * as s from './Logo.styled';

export interface LogoProps {
  theme: string;
}

const Logo: React.FC<LogoProps> = ({ theme }) => {
  return (
    <s.Link to="/" aria-label="Company logo" theme={theme}>
      <s.Container>
        <IoLogoSnapchat />
        CasperCHAT
      </s.Container>
    </s.Link>
  );
};

export default Logo;
