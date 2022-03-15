import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(initialUrl);
  const [errorMessage, setErrorMessage] = useState("");
  // const handleUpdateQuery = lodash.debounce((e) => {
  //   setQuery(e.target.value);
  // }, 500);
  const handleFetchData = useRef({});
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Error can not fetch API ${error}`);
    }
    // console.log(response.data.hits);
  };
  useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
