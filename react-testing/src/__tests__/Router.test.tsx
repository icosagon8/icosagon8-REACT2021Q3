import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { App } from '../App';
import { store } from '../store/store';

describe('Router', () => {
  test('Navigating to Details page', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfc62',
            height: '',
            race: 'Hobbit',
            gender: 'Female',
            birth: 'TA 2818',
            spouse: 'Marmadoc Brandybuck',
            death: '',
            realm: '',
            hair: '',
            name: 'Adaldrida (Bolger) Brandybuck',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck',
          },
          {
            _id: '5cd99d4bde30eff6ebccfe63',
            height: '',
            race: 'Hobbit',
            gender: '',
            birth: '',
            spouse: '',
            death: '',
            realm: '',
            hair: '',
            name: 'Adalgar Bolger',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adalgar_Bolger',
          },
        ],
        total: 933,
        limit: 8,
        page: 1,
        pages: 117,
      })
    );

    const { findByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const element = await findByText(/Adalgar Bolger/i);

    fireEvent.click(element);
  });

  test('Navigating to About page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    fireEvent.click(getByText(/About/i));
    expect(getByText(/With this application you can find/i)).toBeInTheDocument();
  });
});
