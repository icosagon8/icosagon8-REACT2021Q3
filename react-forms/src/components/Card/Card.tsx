import React from 'react';
import { CardModel } from '../../models/cardModel';
import './Card.scss';

interface Props {
  card: CardModel;
}

export class Card extends React.Component<Props> {
  render(): JSX.Element {
    const { name, surname, birthday, country } = this.props.card;

    return (
      <li className="card">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Birthday: {birthday}</p>
        <p>Country: {country}</p>
      </li>
    );
  }
}
