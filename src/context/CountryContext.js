import { createContext, useEffect, useReducer } from "react";
import {
  ACTION_TYPES,
  CountryReducer,
  initialState,
} from "../reducers/CountryReducer";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  useEffect(() => {
    console.log("START FETCHING");
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

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};