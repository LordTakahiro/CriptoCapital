import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #1f1f1f;
  color: #e0e0e0;
  text-decoration: none;
  border-radius: 10px;
  font-size: 1.1em;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s;
  width: 100%;
  height: 100%;

  &:hover {
    color: #ffffff;
    animation: ${glow} 2s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transition: opacity 0.3s;
    opacity: 0;
    animation: ${glow} 2s infinite;
  }

  &:hover::before {
    opacity: 1;
  }

  svg {
    margin-right: 8px;
    color: #8e44ad; /* Purple color for the icon */
  }
`;

export default StyledButton;
