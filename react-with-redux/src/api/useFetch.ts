import { useEffect, useState } from 'react';

interface State<T> {
  data: T | null;
  isLoading: boolean;
}

export function useFetch<T>(url: string): State<T> {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
      Authorization: 'Bearer epl1FjsX01RLrlC4cVqe',
    };

    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData(): Promise<void> {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          headers,
          signal,
        });
        const json = await response.json();
        setData(json);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, isLoading };
}
