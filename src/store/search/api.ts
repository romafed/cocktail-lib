import axios from "../axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { firstLetterToLowerCase } from "../../utils";

const url = (type: string): string =>
  `https://the-cocktail-db.p.rapidapi.com/${type}.php`;

export const getCategories = async () => {
  const config: AxiosRequestConfig = {
    params: {
      c: "list"
    }
  };

  const res: AxiosResponse = await axios.get(url("list"), config);
  return res.data.drinks;
};

export const getAlcoholic = async () => {
  const config: AxiosRequestConfig = {
    params: {
      a: "list"
    }
  };

  const res: AxiosResponse = await axios.get(url("list"), config);
  return res.data.drinks;
};

export const getIngredients = async () => {
  const config: AxiosRequestConfig = {
    params: {
      i: "list"
    }
  };

  const res: AxiosResponse = await axios.get(url("list"), config);
  return res.data.drinks;
};

export const getGlasses = async () => {
  const config: AxiosRequestConfig = {
    params: {
      g: "list"
    }
  };

  const res: AxiosResponse = await axios.get(url("list"), config);
  return res.data.drinks;
};

export const getCocktailBySearching = async (
  filter: string,
  params: string
) => {
  const paramsKey = firstLetterToLowerCase(filter).charAt(0);
  const config: AxiosRequestConfig = {
    params: {
      [`${paramsKey}`]: params
    }
  };

  const res: AxiosResponse = await axios.get(url('filter'), config);
  return res.data.drinks;
};
