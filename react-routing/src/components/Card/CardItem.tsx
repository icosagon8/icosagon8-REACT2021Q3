/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import { DocsModel } from '../../models/DocsModel';
import './CardItem.scss';

interface Props {
  card: DocsModel;
}

export function CardItem({ card }: Props): JSX.Element {
  return (
    <Link className="card" to={`/details/${card._id}`}>
      <p className="card__name">{card.name}</p>
      {card.race !== 'NaN' && <p>{card.race}</p>}
      {card.gender !== 'NaN' && <p>{card.gender}</p>}
    </Link>
  );
}
