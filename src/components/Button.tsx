import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid yellow;
  min-width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.5rem;
  outline: none;
  transition: all 0.05s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  &:active {
    color: red;
    border-color: red;
    transform: scale(1.1);
  }
`;

const Button = ({ children, onClick }: ButtonPropsType) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

interface ButtonPropsType {
  children: string;
  onClick: () => void;
}

export default Button;
