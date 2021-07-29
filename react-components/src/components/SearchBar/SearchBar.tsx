import React from 'react';
import './SearchBar.scss';

interface Props {
  placeholder: string;
}

const SearchBar = ({ placeholder }: Props): JSX.Element => {
  return (
    <form className="search-bar">
      <button className="search-bar__submit" type="submit"></button>
      <input className="search-bar__search" type="text" placeholder={placeholder} name="search" autoComplete="off" />
    </form>
  );
};

export default SearchBar;
