import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import {
  ACTION_TYPES,
  CountryReducer,
  initialState,
} from "../reducers/CountryReducer";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  //fetch data
  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESSFUL, payload: data });
      })
      .catch((err) => {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      });
  }, []);

  const content = state.countries.map((country) => (
    <Link to={country.cca3} key={country.name.common}>
      <CountryItem country={country} />
    </Link>
  ));

  // !state.loading && console.log(state);

  return (
    <div className="country-container">
      {state.loading ? <div className="loading">Loading...</div> : content}
    </div>
  );
};

export default CountryList;
