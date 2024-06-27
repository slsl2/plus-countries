import styled, { css } from "styled-components";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
}

const CountryLi = styled.li<{ $isSelected: boolean }>`
  width: 200px;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -4px rgb(0 0 0 / 0.1);

  ${(props) =>
    props.$isSelected &&
    css`
      border: 1px solid #06c3a7;
    `}
  ${(props) =>
    !props.$isSelected &&
    css`
      border: none;
    `}

  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 160px;
  }
`;

const CountryCardBottom = styled.div``;

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  $isSelected,
  toggleCountrySelection,
}) => {
  const handleSelection = () => {
    toggleCountrySelection(country);
  };

  return (
    <CountryLi onClick={handleSelection} $isSelected={$isSelected}>
      <img
        src={country.flags.svg}
        style={{ width: "70px", margin: "10px 0" }}
      />
      <CountryCardBottom>
        <p style={{ fontSize: "15px", textAlign: "left", lineHeight: "200%" }}>
          {country.name.common}
        </p>
        <p style={{ fontSize: "12px", textAlign: "left", lineHeight: "200%" }}>
          {country.capital}
        </p>
      </CountryCardBottom>
    </CountryLi>
  );
};
