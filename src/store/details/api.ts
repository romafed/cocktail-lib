import axios from "../axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const url = (type: string): string =>
  `https://the-cocktail-db.p.rapidapi.com/${type}.php`;

export const getCocktailDetails = async (cocktailId: string): Promise<any> => {
  const config: AxiosRequestConfig = {
    params: {
      i: cocktailId
    }
  };
  const res: AxiosResponse = await axios.get(url("lookup"), config);
  return res.data.drinks;
};
