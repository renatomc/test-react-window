import React from 'react';

import logo from '../../assets/logo.jpeg';

import { Container, ImgLogo, LinkLogo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LinkLogo to="/">
        <ImgLogo src={logo} alt="Renato Costa List" />
      </LinkLogo>
    </Container>
  );
};

export default Header;
