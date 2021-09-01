import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CardList } from '../components/CardList/CardList';
import { Loader } from '../components/Loader/Loader';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Sorting } from '../components/Sorting/Sorting';
import { SortConfigModel } from '../models/SortConfigModel';
import { fetchCharacters } from '../store/actions/fetchCharacters';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState, Store } from '../store/store';

const initialState = {
  search: '',
  sortConfig: null,
  limit: 8,
  currentPage: 1,
};

function Home(): JSX.Element {
  const { data, isLoading } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>(initialState.search);
  const [sortConfig, setSortConfig] = useState<null | SortConfigModel>(initialState.sortConfig);
  const [limit, setLimit] = useState<number>(initialState.limit);
  const [currentPage, setCurrentPage] = useState<number>(initialState.currentPage);

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

const mapStateToProps = (state: RootState) => {
  return { data: state.characters.data, isLoading: state.characters.isLoading };
};

const fetchInitialData = (store: Store) => {
  return store.dispatch(fetchCharacters(initialState));
};

export default {
  component: connect(mapStateToProps, { fetchCharacters })(Home),
  fetchInitialData,
};
