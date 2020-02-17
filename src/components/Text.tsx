import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledText = styled.p`
  strong {
    font-family: "Galada", cursive;
    letter-spacing: 3px;
  }
`;

const Text: FunctionComponent<TextProps> = ({ children, show = true, title }) => {
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

type TextProps = {
  children: string;
  show: string | null | Boolean;
  title?: string;
}

export default Text;
