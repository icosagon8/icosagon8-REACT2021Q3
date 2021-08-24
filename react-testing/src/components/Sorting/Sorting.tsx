import React from 'react';
import { SortConfigModel } from '../../models/SortConfigModel';
import './Sorting.scss';

interface Props {
  sortConfig: SortConfigModel | null;
  setSortConfig: React.Dispatch<React.SetStateAction<SortConfigModel | null>>;
}

export function Sorting({ sortConfig, setSortConfig }: Props): JSX.Element {
  const getButtonSortClassName = (name: string) => {
    if (!sortConfig) return '';

    return sortConfig.key === name ? ` sorting__btn--${sortConfig.direction}` : '';
  };

  const handleClick = (key: string) => {
    let direction = 'asc';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className="sorting">
      <span className="sorting__title">Sort by:</span>
      <div className="sorting__btn-container">
        <button className={`sorting__btn${getButtonSortClassName('name')}`} onClick={() => handleClick('name')}>
          Name
        </button>
        <button className={`sorting__btn${getButtonSortClassName('race')}`} onClick={() => handleClick('race')}>
          Race
        </button>
        <button className={`sorting__btn${getButtonSortClassName('gender')}`} onClick={() => handleClick('gender')}>
          Gender
        </button>
      </div>
    </div>
  );
}
