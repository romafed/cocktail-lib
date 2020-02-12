import axios, { AxiosRequestConfig } from "axios";

const defaultOptions: AxiosRequestConfig = {
  method: "get",
  headers: {
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "ad8d7afa09msh6a58e8971af7e5fp15729bjsncfb676d6ae00"
  }
};

let instance = axios.create(defaultOptions);

export default instance;
