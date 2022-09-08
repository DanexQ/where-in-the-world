import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";
import CountryForm from "./CountryForm";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { countries, loading } = useContext(CountryContext);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    setSearchResults(countries);
  }, [countries]);

  const content = loading ? (
    <div className="loading">Loading...</div>
  ) : (
    searchResults.map((country) => (
      <Link to={country.cca3} key={country.name.common}>
        <CountryItem country={country} />
      </Link>
    ))
  );

  // !state.loading && console.log(state);

  return (
    <div className="country-list">
      <CountryForm setSearchResults={setSearchResults} countries={countries} />
      <div className="country-container">{content}</div>
    </div>
  );
};

export default CountryList;
