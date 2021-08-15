import React, { useState } from 'react';
import { useFetch } from '../api/useFetch';
import { CardList } from '../components/CardList/CardList';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Sorting } from '../components/Sorting/Sorting';
import { DataModel } from '../models/DataModel';
import { SortConfigModel } from '../models/SortConfigModel';

export function Home(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<null | SortConfigModel>(null);
  const [limit, setLimit] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sort = sortConfig ? `&sort=${sortConfig.key}:${sortConfig.direction}` : '';
  const { data, isLoading } = useFetch<DataModel>(
    `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${limit}${sort}&name=/${search}/i`
  );

  return (
    <React.Fragment>
      <SearchBar placeholder="Search..." setSearch={setSearch} />
      <Sorting sortConfig={sortConfig} setSortConfig={setSortConfig} />
      {isLoading ? <Loader /> : data && <CardList cards={data.docs} />}
      <Pagination limit={limit} setLimit={setLimit} setCurrentPage={setCurrentPage} pages={data?.pages} />
    </React.Fragment>
  );
}
