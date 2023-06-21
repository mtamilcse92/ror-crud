import { useState, useEffect } from "react";

const useDebounceSearch = <T>(initialValue: T, delay: number): {
    value: T,
    onChange: React.Dispatch<React.SetStateAction<T>>;
} => {
    const [searchTerm, setSearchTerm] = useState<T>(initialValue);
    const [debouncedTerm, setDebouncedTerm] = useState<T>(initialValue);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedTerm(searchTerm);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [searchTerm, delay]);
  
    return { value: debouncedTerm, onChange: setSearchTerm };
  };

  export default useDebounceSearch;
