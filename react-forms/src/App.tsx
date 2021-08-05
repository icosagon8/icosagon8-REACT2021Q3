import React from 'react';
import { CardList } from './components/CardList/CardList';
import { Contacts } from './components/Contacts/Contacts';
import { Form } from './components/Form/Form';
import { CardModel } from './models/cardModel';

interface State {
  cards: CardModel[];
}
export class App extends React.Component<Record<string, never>, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      cards: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(state: CardModel): void {
    this.setState((prevState) => ({ cards: [...prevState.cards, state] }));
  }

  render(): JSX.Element {
    return (
      <main className="container">
        <Contacts>
          <Form handleSubmit={this.handleSubmit} />
        </Contacts>
        <CardList cards={this.state.cards} />
      </main>
    );
  }
}
