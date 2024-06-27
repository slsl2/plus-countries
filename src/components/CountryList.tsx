import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countries";
import { Country } from "../types/country";
import { CountryCard } from "./CountryCard";
import styled from "styled-components";

const CountryUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10px 0 30px 0;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  const { data, isPending, error } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  useEffect(() => {
    if (data) {
      const countriesWithSelection = data.map((country) => ({
        ...country,
        isSelected: false,
      }));
      setCountries(countriesWithSelection);
    }
  }, [data]);

  const toggleCountrySelection = (selectedCountry: Country) => {
    setCountries((prevCountries) =>
      prevCountries.map((country) =>
        country.name.common === selectedCountry.name.common
          ? { ...country, isSelected: !country.isSelected }
          : country
      )
    );
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const favoriteCountries = countries.filter((country) => country.isSelected);

  const otherCountries = countries.filter((country) => !country.isSelected);

  return (
    <>
      <div>
        <p>Favorite Countries</p>
        <CountryUl>
          {favoriteCountries.map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              $isSelected={country.isSelected}
              toggleCountrySelection={toggleCountrySelection}
            />
          ))}
        </CountryUl>
      </div>
      <div>
        <p>Countries</p>
        <CountryUl>
          {otherCountries.map((country: Country) => (
            <CountryCard
              key={country.name.common}
              country={country}
              $isSelected={country.isSelected}
              toggleCountrySelection={toggleCountrySelection}
            />
          ))}
        </CountryUl>
      </div>
    </>
  );
};
