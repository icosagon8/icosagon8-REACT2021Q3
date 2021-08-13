import React, { useState } from 'react';
import './SearchBar.scss';

interface Props {
  placeholder: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ placeholder, setSearch }: Props): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSearch(query);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <button className="search-bar__submit" type="submit"></button>
      <input
        className="search-bar__search"
        type="text"
        placeholder={placeholder}
        name="search"
        autoComplete="off"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};
