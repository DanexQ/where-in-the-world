import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ACTION_TYPES,
  CountryReducer,
  initialState,
} from "../reducers/CountryReducer";
import { useReducer } from "react";

const CountryPage = () => {
  const { countryName } = useParams();
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://restcountries.com/v3.1/name/${countryName}`, { signal })
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
  }, [countryName]);

  !state.loading && console.log(state);

  return <div>CountryPage</div>;
};

export default CountryPage;
