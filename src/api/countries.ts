import axios from "axios";
import { Country } from "../types/country";

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching countries");
  }
};
