import React, {FunctionComponent} from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const StyledError = styled.div`
  border: 2px solid red;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 0.5rem;
  color: red;
  text-align: center;
`;

const Error: FunctionComponent<ErrorProps> = ({ message, show }) => {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <StyledError>
                <ErrorText>{message}</ErrorText>
              </StyledError>
            </animated.div>
          )
      )}
    </>
  );
};

type ErrorProps = {
  message: string | undefined;
  show: Boolean;
}

export default Error;
