import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from '../components/SearchBar/SearchBar';

describe('<SearchBar />', () => {
  test('Input value change correctly', () => {
    const mockSetSearch = jest.fn();
    const placeholder = 'Search';
    const { getByPlaceholderText } = render(<SearchBar placeholder={placeholder} setSearch={mockSetSearch} />);
    const element = getByPlaceholderText(placeholder);
    fireEvent.change(element, { target: { value: 'Frodo' } });
    expect(element).toHaveDisplayValue('Frodo');
  });

  test('Successfully Submit', () => {
    const mockSetSearch = jest.fn();
    const placeholder = 'Search';
    const { getByRole } = render(<SearchBar placeholder={placeholder} setSearch={mockSetSearch} />);
    const button = getByRole('button');
    fireEvent.submit(button);
    expect(mockSetSearch).toHaveBeenCalled();
  });

  test('Entering search value', () => {
    const mockSetSearch = jest.fn();
    const placeholder = 'Search';
    const { getByPlaceholderText } = render(<SearchBar placeholder={placeholder} setSearch={mockSetSearch} />);
    const element = getByPlaceholderText(placeholder);
    fireEvent.change(element, { target: { value: 'Frodo' } });
    fireEvent.keyDown(element, { code: 'ShiftRight' });
    fireEvent.keyDown(element, { code: 'Enter' });
  });
});
