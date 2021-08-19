import React, { useEffect, useState } from 'react';
import { CardList } from '../components/CardList/CardList';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Sorting } from '../components/Sorting/Sorting';
import { SortConfigModel } from '../models/SortConfigModel';
import { fetchCharacters } from '../store/actions/fetchCharacters';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export function Home(): JSX.Element {
  const { data, isLoading } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>('');
  const [sortConfig, setSortConfig] = useState<null | SortConfigModel>(null);
  const [limit, setLimit] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(fetchCharacters({ currentPage, limit, sortConfig, search }));
  }, [dispatch, currentPage, limit, search, sortConfig]);

  return (
    <React.Fragment>
      <SearchBar placeholder="Search..." setSearch={setSearch} />
      <Sorting sortConfig={sortConfig} setSortConfig={setSortConfig} />
      {isLoading ? <Loader /> : data && <CardList cards={data.docs} />}
      <Pagination limit={limit} setLimit={setLimit} setCurrentPage={setCurrentPage} pages={data?.pages} />
    </React.Fragment>
  );
}
