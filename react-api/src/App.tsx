import React, { useEffect, useState } from 'react';
import { CardList } from './components/CardList/CardList';
import { Loader } from './components/Loader/Loader';
import { Pagination } from './components/Pagination/Pagination';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Sorting } from './components/Sorting/Sorting';
import { DataModel } from './models/DataModel';
import { SortConfigModel } from './models/SortConfigModel';

export function App(): JSX.Element {
  const [data, setData] = useState<null | DataModel>(null);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sortConfig, setSortConfig] = useState<null | SortConfigModel>(null);
  const [limit, setLimit] = useState<number>(4);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`,
    };

    async function fetchData(): Promise<void> {
      setIsLoading(true);
      const sort = sortConfig ? `&sort=${sortConfig.key}:${sortConfig.direction}` : '';

      try {
        const response = await fetch(
          `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${limit}${sort}&name=/${search}/i`,
          {
            headers,
          }
        );
        const json: DataModel = await response.json();
        setData(json);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [search, sortConfig, limit, currentPage]);

  return (
    <main className="container">
      <SearchBar placeholder="Search a lotr character..." setSearch={setSearch} />
      <Sorting sortConfig={sortConfig} setSortConfig={setSortConfig} />
      {isLoading ? <Loader /> : data && <CardList cards={data.docs} />}
      <Pagination limit={limit} setLimit={setLimit} setCurrentPage={setCurrentPage} pages={data?.pages} />
    </main>
  );
}
