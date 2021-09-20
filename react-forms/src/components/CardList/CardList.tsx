import React from 'react';
import { CardModel } from '../../models/cardModel';
import { Card } from '../Card/Card';
import './CardList.scss';

interface Props {
  cards: CardModel[];
}

export class CardList extends React.Component<Props> {
  render(): JSX.Element | null {
    if (!this.props.cards.length) return null;
    const cards = this.props.cards.map((card, index) => <Card key={index} card={card} />);

    return <ul className="card-list">{cards}</ul>;
  }
}
