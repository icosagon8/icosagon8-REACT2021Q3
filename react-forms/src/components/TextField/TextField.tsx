import React from 'react';
import './TextField.scss';

interface Props {
  value: string;
  type: string;
  name: string;
  label: string;
  autoComplete: string;
  errorName?: string;
  errorText: string;
  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export class TextField extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.props.onChange(event);
  }

  render(): JSX.Element {
    return (
      <label className="input__label">
        {this.props.label}:
        {this.props.errorName !== undefined && <span className="input__error"> {this.props.errorText}</span>}
        <input
          className="input__field"
          type={this.props.type}
          name={this.props.name}
          autoComplete="off"
          value={this.props.value}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
