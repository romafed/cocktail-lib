import React, { useState, FunctionComponent } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import { Category, Ingredient, Glass, Alcoholic } from "../store/search/types";

import * as utils from "../utils";

type StyledSelect = {
  disabled?: Boolean;
  isOpen: Boolean;
};
const StyledSelect = styled.div<StyledSelect>`
  outline: none;
  color: #fff;
  position: relative;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid ${props => (props.isOpen ? "red" : "yellow")};
  ${props => props.disabled && "opacity: 0.5; pointer-events: none;"};
  z-index: 10;
  &:hover .optionsContainer {
    background-color: rgba(0, 0, 0, 1);
  }
  &:focus {
    z-index: 100;
  }
`;

const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.2rem;
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  z-index: 30;
`;

const StyledOption = styled.div`
  cursor: pointer;
  margin: 0.5rem 0;
  transition: all 0.3s ease-in-out;
  padding: 0.3rem;
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
    font-weight: 700;
  }
`;

const Icon = styled.i<StyledSelect>`
  transition: all 0.3s ease-in-out;
  transform: ${props => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  color: ${props => (props.isOpen ? "red" : "yellow")};
`;

type OptionTypes = {
  onClick: () => void;
};
const Option: FunctionComponent<OptionTypes> = ({ children, onClick }) => {
  return <StyledOption onClick={onClick}>{children}</StyledOption>;
};

const Select: FunctionComponent<SelectProps> = ({
  disabled = false,
  options,
  value,
  onChange,
  name,
  placeholder
}) => {
  const arrOptions: Array<string> = options
    ? utils.inArrayStr(options)
    : ["Empty"];

  const [open, setOpen] = useState(false);
  const transition = useTransition(open, null, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-20px)" }
  });
  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleChange = (value: string): void => {
    setOpen(false);
    onChange(name, value, true);
  };

  return (
    <StyledSelect disabled={disabled} tabIndex={1} id='select' isOpen={open}>
      <SelectedOption onClick={handleOpen}>
        {value || placeholder}
        <Icon isOpen={open} className='material-icons'>
          keyboard_arrow_down
        </Icon>
      </SelectedOption>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ ...props }}>
              <OptionsContainer className='optionsContainer'>
                {arrOptions.map((item: any, index: number) => (
                  <Option onClick={() => handleChange(item)} key={index}>
                    {item}
                  </Option>
                ))}
              </OptionsContainer>
            </animated.div>
          )
      )}
    </StyledSelect>
  );
};

type SelectProps = {
  disabled?: Boolean;
  placeholder: string;
  options: Array<Category | Ingredient | Glass | Alcoholic | string>;
  value: string;
  name: string;
  onChange: (
    field: string,
    value: string | null,
    shouldValidate?: boolean | undefined
  ) => any;
};

export default Select;
