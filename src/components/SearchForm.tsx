import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import Select from "./Select";
import Button from "./Button";
import Error from "./Error";

import { Category } from "../store/search/actionsTypes";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
`;

const SearchForm = ({ categories, onSubmitForm }: SearchFormType) => {
  const formik = useFormik({
    initialValues: {
      category: "Select category"
    },
    validate: values => {
      const error: any = {};
      if (values.category === "Select category") {
        error.category = "Select field";
      }

      return error;
    },
    onSubmit: values => {
      onSubmitForm(values.category);
    }
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputGroup>
        <Select
          name='category'
          onChange={formik.setFieldValue}
          value={formik.values.category}
          options={categories}
        />
        <Button
          disabled={!!(formik.touched && formik.errors.category)}
          type='submit'>
          Submit
        </Button>
      </InputGroup>
      <Error message={formik.errors.category} />
    </FormContainer>
  );
};

interface SearchFormType {
  onSubmitForm: (category: string) => void;
  categories: Category[];
}

export default SearchForm;
