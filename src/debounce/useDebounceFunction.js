import { useEffect } from "react";

export default function useDebounceFunction(fn = () => {}, delay = 1000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
}
