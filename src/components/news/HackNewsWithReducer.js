import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";
// import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: "true",
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
};
const hackerNewsReducer = (state, action) => {
  switch (action.tyle) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
  }
};

const HackNewsWithReducer = () => {
  const [state, dispatch] = useReducer(hackerNewsReducer, initialState);

  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      tyle: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(state.url);
      dispatch({
        tyle: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        tyle: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        tyle: "SET_LOADING",
        payload: false,
      });
      dispatch({
        tyle: "SET_ERROR",
        payload: `The error happen ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 block w-full rounded-md mb-5 transition-all focus:border-blue-400"
          placeholder="Typing your keyword..."
          defaultValue={state.query}
          onChange={(e) =>
            dispatch({
              tyle: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          onClick={() =>
            dispatch({
              tyle: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          disabled={state.loading}
          className="bg-blue-500 text-while font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching
        </button>
      </div>
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-4 border-blue-500 boder-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && (
        <p className="text-red-400 my-5">{state.errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 className="p-3 bg-gray-100 rounded-md" key={item.title}>
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackNewsWithReducer;
