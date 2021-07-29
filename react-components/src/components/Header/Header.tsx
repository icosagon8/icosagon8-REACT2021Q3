import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="page-header">
      <SearchBar placeholder="Search" />
    </header>
  );
};

export default Header;
