import React from 'react';
import { DocsModel } from '../../models/DocsModel';
import { CardItem } from '../Card/CardItem';
import './CardList.scss';

interface Props {
  cards: DocsModel[];
}

export function CardList({ cards }: Props): JSX.Element {
  // eslint-disable-next-line no-underscore-dangle
  const cardItems = cards.map((card) => <CardItem key={card._id} card={card} />);

  return <ul className="card-list">{cardItems}</ul>;
}
