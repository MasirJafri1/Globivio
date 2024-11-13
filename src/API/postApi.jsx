import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// GET DATA
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// GET DATA FOR EACH COUNTRY
export const getEachCountry = (countryName) => {
  return api.get(
    `/name/${countryName}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
