import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic
} from "../store/search/actionsTypes";

import * as utils from "../utils";

const StyledSelect = styled.div`
  color: #fff;
  position: relative;
  min-width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const SelectedOption: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid ${(props: any) => (props.isOpen ? "red" : "yellow")};
`;

const OptionsContainer = styled.div`
  width: 100%;
  max-height: 300px;
  overflow-x: hidden;
  position: absolute;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  z-index: 999;
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

const Icon: any = styled.i`
  transition: all 0.3s ease-in-out;
  transform: ${(props: any) =>
    props.isOpen ? "rotate(0deg)" : "rotate(180deg)"};
  color: ${(props: any) => (props.isOpen ? "red" : "yellow")};
`;

const Option = ({ children, onClick }: any) => {
  return <StyledOption onClick={onClick}>{children}</StyledOption>;
};

const Select = ({ options, placeholder }: SelectProps) => {
  const arrOptions: Array<string> = utils.inArrayStr(options);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(placeholder);
  const transition = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  console.log(value);

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleChange = (value: string): void => {
    setValue(value);
    setOpen(false);
  };

  return (
    <StyledSelect>
      <SelectedOption isOpen={open} onClick={handleOpen}>
        {value}
        <Icon isOpen={open} className='material-icons'>
          keyboard_arrow_down
        </Icon>
      </SelectedOption>
      {transition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ ...props }}>
              <OptionsContainer>
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
interface SelectProps {
  options: Array<Category | Ingredient | Glass | Alcoholic>;
  placeholder: string;
}

export default Select;
