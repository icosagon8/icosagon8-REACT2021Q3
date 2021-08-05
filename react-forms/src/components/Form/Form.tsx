import React from 'react';
import { CardModel } from '../../models/cardModel';
import { ErrorsModel } from '../../models/errorsModel';
import { Switch } from '../Switch/Switch';
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
  }

  render(): JSX.Element {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label className="form__label">
            Name:
            {this.state.errors.name !== undefined && <span className="form__error"> Name is invalid</span>}
            <input
              className="form__field"
              type="text"
              name="name"
              autoComplete="off"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form__group">
          <label className="form__label">
            Surname:
            {this.state.errors.surname !== undefined && <span className="form__error"> Surname is invalid</span>}
            <input
              className="form__field"
              type="text"
              name="surname"
              autoComplete="off"
              value={this.state.surname}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form__group">
          <label className="form__label">
            Birthday:
            {this.state.errors.birthday !== undefined && <span className="form__error"> Birthday is invalid</span>}
            <input
              className="form__field"
              type="date"
              name="birthday"
              autoComplete="off"
              value={this.state.birthday}
              onChange={this.handleChange}
            />
          </label>
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
