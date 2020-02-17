import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
import { useTransition, animated } from "react-spring";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 200;
`;

const StyledSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 5px solid yellow;
  border-right: 5px solid yellow;
  border-bottom: 5px solid yellow;
  border-left: 5px solid #8f9c4f;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 300;
`;

const Spinner: FunctionComponent<SpinnerProps> = ({ show }) => {
  const transition = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ zIndex: 200, ...props }}>
              <SpinnerWrapper>
                <StyledSpinner />
              </SpinnerWrapper>
            </animated.div>
          )
      )}
    </>
  );
};

type SpinnerProps = {
  show: Boolean;
}

export default Spinner;
