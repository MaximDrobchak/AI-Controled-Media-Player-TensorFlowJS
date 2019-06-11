import { useEffect, useState } from 'react';

export function useLoadingOrError (initialError = null, initialLoading = null){
  const [ error, setError ] = useState(initialError);

  useEffect(
    () => {
      if (error) {
        setTimeout(() => {
          setError(null);
        }, 1000);
      }
    },
    [ error ],
  );

  const [ isLoading, setLoading ] = useState(initialLoading);

  const getError = error => setError(error);
  const getLoading = isLoading => setLoading(isLoading);

  return {
    error,
    getError,
    getLoading,
    isLoading,
  };
}
