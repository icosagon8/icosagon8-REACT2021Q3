import React from 'react';
import { CardModel } from '../../models/cardModel';
import { ErrorsModel } from '../../models/errorsModel';
import { Switch } from '../Switch/Switch';
import { TextField } from '../TextField/TextField';
import './Form.scss';

interface Props {
  handleSubmit(state: CardModel): void;
}

interface State extends CardModel {
  errors: ErrorsModel;
  isSuccess: boolean;
}

export class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      birthday: '',
      country: 'Russia',
      notify: false,
      isChecked: true,
      errors: {},
      isSuccess: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    if (this.validate()) {
      const { name, surname, birthday, country, notify, isChecked } = this.state;
      this.props.handleSubmit({ name, surname, birthday, country, notify, isChecked });
      this.setState({ isSuccess: true });
      this.reset();
    }
  }

  validate(): boolean {
    this.setState({ errors: {}, isSuccess: false });
    const { name, surname, birthday, isChecked } = this.state;
    const errors: ErrorsModel = {};
    let isValid = true;
    const pattern = /(?!^[\d ]+$)^[^!@#$%*()_—+=|:;"'`<>,.?/^]+$/;

    if (!pattern.test(name)) {
      errors.name = name;
      isValid = false;
    }

    if (!pattern.test(surname)) {
      errors.surname = surname;
      isValid = false;
    }

    if (birthday === '') {
      errors.birthday = birthday;
      isValid = false;
    }

    if (!isChecked) {
      errors.isChecked = isChecked;
      isValid = false;
    }

    this.setState({ errors });

    return isValid;
  }

  reset(): void {
    this.setState({
      name: '',
      surname: '',
      birthday: '',
      country: 'Russia',
      notify: false,
      isChecked: true,
    });

    setTimeout(() => this.setState({ isSuccess: false }), 3000);
  }

  render(): JSX.Element {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <TextField
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            label="Name"
            autoComplete="off"
            errorName={this.state.errors.name}
            errorText="Name is invalid"
          />
        </div>
        <div className="form__group">
          <TextField
            type="text"
            name="surname"
            value={this.state.surname}
            onChange={this.handleChange}
            label="Surname"
            autoComplete="off"
            errorName={this.state.errors.surname}
            errorText="Surname is invalid"
          />
        </div>
        <div className="form__group">
          <TextField
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.handleChange}
            label="Birthday"
            autoComplete="off"
            errorName={this.state.errors.birthday}
            errorText="Birthday is invalid"
          />
        </div>
        <div className="form__group">
          <label className="form__label">
            Country:
            <select className="form__field" name="country" value={this.state.country} onChange={this.handleChange}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Kazakhstan">Kazakhstan</option>
            </select>
          </label>
        </div>
        <div className="form__group">
          <Switch handleChange={this.handleChange} />
        </div>
        <div className="form__group">
          <label className="form__label">
            <input
              className="form__field form__field--checkbox"
              type="checkbox"
              name="isChecked"
              checked={this.state.isChecked}
              onChange={this.handleChange}
            />
            I Agree to Privacy Policy
            {this.state.errors.isChecked !== undefined && <span className="form__error"> Agree should be checked</span>}
          </label>
        </div>
        <button className="form__submit" type="submit">
          Send
        </button>
        {this.state.isSuccess && <p className="form__message">Successfully submitted</p>}
      </form>
    );
  }
}
