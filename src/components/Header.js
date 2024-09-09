import React from 'react';
import styled from 'styled-components';
import logo from '../assets/CriptoCapitalIcon.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #000; /* Black background */
`;

const Logo = styled.img`
  max-width: 300px;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Cripto Capital Logo" />
    </HeaderContainer>
  );
};

export default Header;
