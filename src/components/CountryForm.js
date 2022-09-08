import React, { useEffect, useState } from "react";

const CountryForm = ({ setSearchResults, countries }) => {
  const [inputs, setInputs] = useState({
    search: "",
    sort: "",
  });

  useEffect(() => {
    const countriesResults = countries.filter(
      (country) =>
        country.searchWord.includes(inputs.search.toLowerCase()) &&
        country.region.includes(inputs.sort)
    );
    setSearchResults(countriesResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.search, inputs.sort]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="search"
          value={inputs.search}
          onChange={(e) => handleChange(e)}
          className="form__input form__input--search"
          placeholder="Search country. . ."
        />
        <select
          name="sort"
          value={inputs.sort}
          onChange={(e) => handleChange(e)}
          className="form__input form__input--select"
        >
          <option value="">- Sort By Region -</option>
          <option value="">All</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default CountryForm;
