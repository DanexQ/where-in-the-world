export const initialState = {
  countries: [],
  loading: true,
  error: false,
};

export const CountryReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { error: false, loading: true, countries: [] };
    case "FETCH_SUCCESSFUL":
      return { ...state, loading: false, countries: action.payload };
    case "FETCH_ERROR":
      return { ...state, error: true };
    default:
      throw new Error("Coś poszło nie tak");
  }
};

export const ACTION_TYPES = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
};
