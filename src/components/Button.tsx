import React from "react";
import styled from "styled-components";

const StyledButton: any = styled.button`
  border: 2px solid yellow;
  min-width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 0.5rem;
  outline: none;
  transition: all 0.05s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  font-family: "Galada", cursive;
  &:active {
    color: red;
    border-color: red;
    transform: scale(1.1);
  }
  &:disabled {
    color: red;
    border-color: red;
  }
`;

const Button = ({ type, children, disabled = false }: ButtonPropsType) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

interface ButtonPropsType {
  children: string;
  type: string;
  disabled?: Boolean;
}

export default Button;
