import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Sorting } from '../components/Sorting/Sorting';

describe('<Sorting />', () => {
  test('Callback called when you click on the sort buttons', () => {
    const mockSetSortConfig = jest.fn();
    const sortConfig = {
      key: 'name',
      direction: 'asc',
    };

    const { getByRole } = render(<Sorting sortConfig={sortConfig} setSortConfig={mockSetSortConfig} />);
    const nameBtn = getByRole('button', { name: /Name/i });
    fireEvent.click(nameBtn);
    const raceBtn = getByRole('button', { name: /Race/i });
    fireEvent.click(raceBtn);
    const genderBtn = getByRole('button', { name: /Gender/i });
    fireEvent.click(genderBtn);
    expect(mockSetSortConfig).toHaveBeenCalledTimes(3);
  });
});
