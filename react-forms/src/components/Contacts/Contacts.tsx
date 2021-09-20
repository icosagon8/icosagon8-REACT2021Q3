import React from 'react';
import './Contacts.scss';

interface Props {
  children: React.ReactNode;
}

export class Contacts extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <section className="contacts">
        <div className="contacts__wrapper">
          <h2 className="contacts__title">Contacts</h2>
          {this.props.children}
        </div>
      </section>
    );
  }
}
