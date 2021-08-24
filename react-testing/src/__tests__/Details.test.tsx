import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/store';
import { Details } from '../pages/Details/Details';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('<Details />', () => {
  test('Renders card with data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccfc62',
            height: '1.06m',
            race: 'Hobbit',
            gender: 'Female',
            birth: 'TA 2818',
            spouse: 'Marmadoc Brandybuck',
            death: 'TA 2982',
            realm: 'Númenor',
            hair: 'Brown',
            name: 'Adaldrida (Bolger) Brandybuck',
            wikiUrl: 'http://lotr.wikia.com//wiki/Adaldrida_(Bolger)_Brandybuck',
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
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>
    );

    const element = await findByText(/Adaldrida \(Bolger\) Brandybuck/i);
    expect(element).toBeInTheDocument();
  });

  test('Renders card without data', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        docs: [
          {
            _id: '5cd99d4bde30eff6ebccf657',
            height: '',
            race: '',
            gender: '',
            birth: '',
            spouse: '',
            death: '',
            realm: '',
            hair: '',
            name: '',
            wikiUrl: '',
          },
        ],
        total: 933,
        limit: 8,
        page: 1,
        pages: 117,
      })
    );

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>
    );
  });
});
