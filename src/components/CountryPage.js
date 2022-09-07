import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ACTION_TYPES,
  CountryReducer,
  initialState,
} from "../reducers/CountryReducer";
import { useReducer } from "react";

const CountryPage = () => {
  const { countryCode } = useParams();
  const [state, dispatch] = useReducer(CountryReducer, initialState);
  console.log(useParams());

  // fetch data
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`, { signal })
      .then((res) => {
        dispatch({ type: ACTION_TYPES.FETCH_START });
        return res.json();
      })
      .then((data) => {
        const [country] = data;
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESSFUL, payload: country });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });

    return () => {
      controller.abort();
    };
  }, [countryCode]);

  console.log(state.countries);

  return (
    <div className="single">
      <button className="single__btn">&larr; Back</button>
      <div className="single__container">
        {state.loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <figure className="single__img-container">
              <img
                src={state.countries.flags.svg}
                alt={state.countries.cca3}
                className="single__img"
              />
            </figure>
            <div className="single__description">
              <h2 className="single__name">{state.countries.name.common}</h2>
              <ul className="single__list">
                <li className="single__list-item">
                  Native name:{" "}
                  <span>
                    {
                      Object.entries(state.countries.name.nativeName)[0][1]
                        .official
                    }
                  </span>
                </li>
                <li className="single__list-item">
                  Population: <span>{state.countries.population}</span>
                </li>
                <li className="single__list-item">
                  Region: <span>{state.countries.region}</span>
                </li>
                <li className="single__list-item">
                  Sub region: <span>{state.countries.subregion}</span>
                </li>
                <li className="single__list-item">
                  Capital: <span>{state.countries.capital[0]}</span>
                </li>
                <li className="single__list-item">
                  Top level domain: <span>{state.countries.tld}</span>
                </li>
                <li className="single__list-item">
                  Currencies:{" "}
                  <span>
                    {Object.entries(state.countries.currencies)
                      .map((currency) => currency[0])
                      .join(", ")}
                  </span>
                </li>
                <li className="single__list-item">
                  Languages:{" "}
                  <span>
                    {Object.entries(state.countries.languages)
                      .map((entry) => entry[1])
                      .join(", ")}
                  </span>
                </li>
              </ul>
              <div className="single__border">
                <p>Border Countries:</p>
                {state.countries.borders.map((country) => (
                  <button key={country} className="single__btn">
                    {country}
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
