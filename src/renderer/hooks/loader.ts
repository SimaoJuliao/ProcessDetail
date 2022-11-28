import { useState } from 'react';

const useLoader = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleLoader = () => {
    setIsLoading((isLoading) => !isLoading);
  };

  return {
    isLoading,
    toggleLoader,
  };
};

export default useLoader;
