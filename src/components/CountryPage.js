import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../context/CountryContext";

const CountryPage = () => {
  const { countries, loading } = useContext(CountryContext);
  const { countryCode } = useParams();
  const [country] = countries.filter((country) => country.cca3 === countryCode);
  console.log(country);

  return (
    <div className="single">
      <button className="single__btn">
        <Link to="/">&larr; Back</Link>
      </button>
      <div className="single__container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            <figure className="single__img-container">
              <img
                src={country.flags.svg}
                alt={country.cca3}
                className="single__img"
              />
            </figure>
            <div className="single__description">
              <h2 className="single__name">{country.name.common}</h2>
              <ul className="single__list">
                <li className="single__list-item">
                  Native name:{" "}
                  <span>
                    {Object.entries(country.name.nativeName)[0][1].official}
                  </span>
                </li>
                <li className="single__list-item">
                  Population: <span>{country.population}</span>
                </li>
                <li className="single__list-item">
                  Region: <span>{country.region}</span>
                </li>
                <li className="single__list-item">
                  Sub region: <span>{country.subregion}</span>
                </li>
                <li className="single__list-item">
                  Capital: <span>{country.capital[0]}</span>
                </li>
                <li className="single__list-item">
                  Top level domain: <span>{country.tld}</span>
                </li>
                <li className="single__list-item">
                  Currencies:{" "}
                  <span>
                    {Object.entries(country.currencies)
                      .map((currency) => currency[0])
                      .join(", ")}
                  </span>
                </li>
                <li className="single__list-item">
                  Languages:{" "}
                  <span>
                    {Object.entries(country.languages)
                      .map((entry) => entry[1])
                      .join(", ")}
                  </span>
                </li>
              </ul>
              <div className="single__border">
                <p>Border Countries:</p>
                {country.borders.map((code) => (
                  <button key={code} className="single__btn">
                    <Link to={`/${code}`}>{code}</Link>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
