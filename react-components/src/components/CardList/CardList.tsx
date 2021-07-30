import React from 'react';
import { CardModel } from '../../models/cardModel';
import CardItem from '../Card/CardItem';
import './CardList.scss';

interface Props {
  cards: CardModel[];
}

const CardList = ({ cards }: Props): JSX.Element => {
  const cardItems = cards.map((card) => (
    <CardItem key={card.id} image={card.image} title={card.title} content={card.body} />
  ));

  return <ul className="card-list">{cardItems}</ul>;
};

export default CardList;
