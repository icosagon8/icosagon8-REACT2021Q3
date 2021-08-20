import React, { useState } from 'react';
import './Pagination.scss';

interface Props {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number | undefined;
}

export function Pagination({ limit, setLimit, setCurrentPage, pages }: Props): JSX.Element {
  const [page, setPage] = useState<number>(1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(+event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === 'Enter') {
      setCurrentPage(page);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(+event.target.value);
  };

  return (
    <div className="pagination">
      <div className="pagination__pages-container">
        <input
          className="pagination__page"
          type="text"
          value={page}
          maxLength={pages}
          onKeyDown={handleInputKeyDown}
          onChange={handleInputChange}
        />
        <span className="pagination__pages">/ {pages}</span>
      </div>
      <label className="pagination__count-chooser">
        Cards per page:
        <select className="pagination__dropdown" value={limit} onChange={handleSelectChange}>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </label>
    </div>
  );
}
