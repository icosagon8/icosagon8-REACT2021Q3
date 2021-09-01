import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from '../App';
import { store } from '../client';

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('<Home />', () => {
  test('Renders <Sorting /> component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(getByText(/Sort by/i)).toBeInTheDocument();
  });

  test('Renders cards', async () => {
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
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const element = await findByText(/Adaldrida \(Bolger\) Brandybuck/i);
    expect(element).toBeInTheDocument();
  });

  test('Sorting on home page', async () => {
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
        ],
        total: 933,
        limit: 8,
        page: 1,
        pages: 117,
      })
    );

    const { getByRole } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    const nameBtn = getByRole('button', { name: /Name/i });
    fireEvent.click(nameBtn);
  });
});
