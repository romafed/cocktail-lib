import React, { useState } from "react";
import styled from "styled-components";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic
} from "../store/search/actionsTypes";

import * as utils from "../utils";

interface SelectProps {
  options: Array<Category | Ingredient | Glass | Alcoholic>;
}

const StyledSelect = styled.div`
  color: #fff;
  position: relative;
  width: 30%;
`;

const SelectedOption = styled.p`
  cursor: pointer;
`;

const OptionsContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
`;

const StyledOption = styled.div`
  cursor: pointer;
`;

const Option = ({ children, onClick }: any) => {
  return <StyledOption onClick={}>{children}</StyledOption>;
};

const Select = ({ options }: SelectProps) => {
  const arrOptions = utils.inArrayStr(options);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(arrOptions[1] || "Select option");

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleChange = (value: string): void => {
    setValue(value);
  };

  return (
    <StyledSelect>
      <SelectedOption onClick={handleOpen}>{value}</SelectedOption>
      {open && (
        <OptionsContainer>
          {arrOptions.map((item: any, index: number) => (
            <Option onClick={handleChange} key={index}>
              {item}
            </Option>
          ))}
        </OptionsContainer>
      )}
    </StyledSelect>
  );
};

export default Select;
