import React from 'react';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import { cards } from './data/cards';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <CardList cards={cards} />
      </main>
    </React.Fragment>
  );
};

export default App;
