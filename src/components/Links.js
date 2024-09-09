import React from 'react';
import { FaInstagram, FaTiktok, FaTimes } from 'react-icons/fa';
import StyledButton from './StyledButton';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 97%;
  height: 100%;
  gap: 35px;
`;

const Links = () => {
  return (
    <div>
      <Title>My Links</Title>
      <LinkGrid>
        <StyledButton href="https://t.co/FAMCzuFnza">
          <FaInstagram size={24} /> theonlywill_
        </StyledButton>
        <StyledButton href="https://x.com/The0nlyWill">
          <FaTimes size={24} /> Will Crypto
        </StyledButton>
        <StyledButton href="https://x.com/CriptoCapitalMX">
          <FaTimes size={24} /> Cripto Capital
        </StyledButton>
        <StyledButton href="https://www.tiktok.com/@theonlywill">
          <FaTiktok size={24} /> theonlywill
        </StyledButton>
      </LinkGrid>
    </div>
  );
};

export default Links;
