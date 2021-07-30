import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="page-header">
      <div className="container">
        <SearchBar placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
