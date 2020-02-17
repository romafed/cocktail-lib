import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import Select from "./Select";
import Button from "./Button";
import Error from "./Error";

import { firstLetterToLowerCase } from "../utils";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
`;

const SearchForm: FunctionComponent<SearchFormProps> = ({
  ingredientForSearch,
  filters,
  values,
  onSubmitForm
}) => {
  const formik = useFormik({
    initialValues: {
      filters: ingredientForSearch ? "ingredients" : "",
      type: ingredientForSearch || ""
    },
    validate: values => {
      type Error = { type?: string };
      const error: Error = {};
      if (!values.type) {
        error.type = `Select ${values.filters}`;
      }

      return error;
    },
    onSubmit: values => {
      onSubmitForm(values.filters, values.type);
    }
  });

  const handleFirstInputChange = (
    name: string,
    value: string | null,
    shouldValidate?: boolean | undefined
  ) => {
    formik.setFieldValue("type", "", shouldValidate);
    formik.setFieldValue(name, value, shouldValidate);
  };

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Select
        name='filters'
        placeholder='Select filter'
        onChange={handleFirstInputChange}
        value={formik.values.filters}
        options={filters}
      />
      <InputGroup>
        <Select
          name='type'
          placeholder={
            formik.values.filters || formik.values.type
              ? `Select ${formik.values.filters}`
              : "First select filter"
          }
          disabled={!!!formik.values.filters}
          onChange={formik.setFieldValue}
          value={formik.values.type}
          options={values[firstLetterToLowerCase(formik.values.filters)]}
        />
        <Button
          disabled={!!(formik.touched.type && formik.errors.type)}
          type='submit'>
          Search
        </Button>
      </InputGroup>
      <Error
        show={!!(formik.touched.type && formik.errors.type)}
        message={formik.errors.type}
      />
    </FormContainer>
  );
};

type SearchFormProps = {
  values: any;
  filters: Array<string>;
  ingredientForSearch: string;
  onSubmitForm: (filter: string, params: string) => void;
};

export default SearchForm;
