import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;

const Description = () => {
  return (
    <div>
      <Title>Description</Title>
      <p>Únete a la comunidad de trading liderada por THEONLYWILL, quien logro convertir 500 USD en NFTs en 500K+ USD.</p>
      <p>Nuestros miembros del VIP de Cripto Capital tendran las herramientas para operar todas las criptomonedas populares, alertas de primera clase, entrenamientos diarios en vivo, acceso a preventas e inversiones privadas y más.</p>
      <p>Obtén acceso a:</p>
      <p>• Alertas de Cripto y NFTs Diarias<br/>
      • Sesiones semanales en vivo<br/>
      • Acceso anticipado a próximos lanzamientos de NFTs o Tokens privados<br/>
      • Herramientas de trading de primera clase</p>
    </div>
  );
};

export default Description;
