import React from "react";

const CountryItem = ({ country }) => {
  return (
    <div className="country">
      <div className="country__img">
        <img src={country.flags.svg} alt={country.name.common} />
      </div>
      <div className="country__description">
        <h2 className="country__name">{country.name.common}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryItem;
