import React, { FunctionComponent } from "react";
import styled, { StyledComponent } from "styled-components";

const StyledButton: StyledComponent<"button", any, any, never> = styled.button`
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

const Button: FunctionComponent<ButtonProps> = ({
  children,
  type,
  disabled = false
}) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: Boolean | undefined;
};

export default Button;
