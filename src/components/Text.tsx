import React, { FunctionComponent } from "react";
import styled from "styled-components";

type StyledTextProps = {
  fontSize: string | undefined;
};

const StyledText = styled.p<StyledTextProps>`
  strong {
    font-family: "Galada", cursive;
    letter-spacing: 3px;
    ${props => props.fontSize && `font-size: ${props.fontSize}`}
  }
`;

const Text: FunctionComponent<TextProps> = ({
  children,
  show = true,
  title,
  fontSize
}) => {
  return (
    <>
      {show && (
        <StyledText fontSize={fontSize}>
          <strong>{title}</strong>
          {children}
        </StyledText>
      )}
    </>
  );
};

type TextProps = {
  show: string | null | Boolean;
  title?: string;
  fontSize?: string | undefined;
};

export default Text;
