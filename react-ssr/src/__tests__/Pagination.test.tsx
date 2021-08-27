import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from '../App';
import { store } from '../store/store';

describe('<Pagination />', () => {
  test('Select value change correctly', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const selectElement = getByLabelText(/Cards per page/i);
    fireEvent.change(selectElement, { target: { value: '12' } });
    expect(selectElement).toHaveDisplayValue('12');
  });

  test('Input value change correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = getByTestId('input-page-number');
    fireEvent.change(input, { target: { value: '2' } });
    expect(input).toHaveDisplayValue('2');
  });

  test('Entering page value', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const input = getByTestId('input-page-number');
    fireEvent.keyDown(input, { code: 'ShiftRight' });
    fireEvent.keyDown(input, { code: 'Enter' });
  });
});
