import React from 'react';
import './CardItem.scss';

interface Props {
  image: string;
  title: string;
  content: string;
}

const CardItem = ({ image, title, content }: Props): JSX.Element => {
  return (
    <li className="card">
      <div className="card__header">
        <img className="card__image" src={image} alt="" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{content}</p>
      </div>
      <div className="card__footer">
        <a className="card__link" href="/#">
          Read more
        </a>
        <div className="card__btn-container">
          <button className="card__favourite" type="button"></button>
          <button className="card__share" type="button"></button>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
