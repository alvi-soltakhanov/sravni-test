const initialState = {
  cofe: [],
  loading: true,
  error: null,
};

export const  getData = (state = initialState, action) => {
  switch (action.type) {
    case "pending":
      return {
        ...state,
        loading: true,
      };
    case "fulfilled":
        return {
        ...state,
        loading: false,
        cofe: action.payload,
      };
    case "rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getSomeCofe = () => {
  return async (dispatch) => {
      dispatch({ type: "pending" });
      try {
          const res = await fetch("https://random-data-api.com/api/coffee/random_coffee?size=20");
          const data = await res.json();
          console.log(data);
          dispatch({ type: "fulfilled", payload: data });
      } catch (e) {
          console.log('error');
      }
  };
};
