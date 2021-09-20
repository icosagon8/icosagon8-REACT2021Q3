import React from 'react';
import { DocsModel } from '../../models/DocsModel';
import './CardItem.scss';

interface Props {
  card: DocsModel;
}

export function CardItem({ card }: Props): JSX.Element {
  return (
    <li className="card">
      <p className="card__name">{card.name}</p>
      {card.race !== 'NaN' && <p>{card.race}</p>}
      {card.gender !== 'NaN' && <p>{card.gender}</p>}
      {card.wikiUrl && (
        <a className="card__link" href={card.wikiUrl} target="blank">
          Wiki
        </a>
      )}
    </li>
  );
}
