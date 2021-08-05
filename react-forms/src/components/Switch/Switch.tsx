import React from 'react';
import './Switch.scss';

interface Props {
  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export class Switch extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.props.handleChange(event);
  }

  render(): JSX.Element {
    return (
      <label className="switch">
        <span className="switch__label">I want to receive notifications about promotions</span>
        <input className="switch__field" type="checkbox" name="notify" onChange={this.handleChange} />
        <span className="switch__slider"></span>
      </label>
    );
  }
}
