import { useEffect, useState } from "react";

export default function useDebounce(initializeVale = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initializeVale);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initializeVale);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [initializeVale, delay]);
  return debounceValue;
}
