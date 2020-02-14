import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  strong {
    font-family: "Galada", cursive;
    letter-spacing: 3px;
  }
`;

const Text = ({ children, show = true, title }: TextPropsType) => {
  return (
    <>
      {show && (
        <StyledText>
          <strong>{title}</strong>
          {children}
        </StyledText>
      )}
    </>
  );
};

interface TextPropsType {
  children: string;
  show?: string | null | Boolean;
  title?: string;
}

export default Text;
