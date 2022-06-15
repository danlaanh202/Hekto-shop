import { useEffect } from "react";

export default function DebounceFunction(fn = () => {}, delay = 1000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fn();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [fn,delay]);
}

