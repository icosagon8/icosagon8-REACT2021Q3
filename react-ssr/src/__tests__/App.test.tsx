import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from '../App';
import { store } from '../store/store';

describe('<App />', () => {
  test('Renders <App /> component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
