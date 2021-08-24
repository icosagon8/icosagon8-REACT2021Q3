import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import './Header.scss';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__container container">
        <p className="header__title">Find lotr character</p>
        <Navbar />
      </div>
    </header>
  );
}
