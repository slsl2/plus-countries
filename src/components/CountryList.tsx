import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api/countries";
import { Country } from "../types/country";

export const CountryList = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const { data, isPending, error } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  useEffect(() => {
    if (data) {
      setCountries(data);
    }
  }, [data]);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
};
