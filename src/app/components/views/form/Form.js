import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { constants } from '../../../constants';

const LabelText = styled('span')`
  margin-left: 0.5rem;
`;

const Button = styled('button')`
  margin-top: 1rem;
`;

const Notification = styled('article')`
  margin: 1rem 0;
`;

export class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.formData.id,
      name: props.formData.name,
      shortDescription: props.formData.shortDescription,
      active: props.formData.active,
      error: '',
    };

    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.formData.id !== prevProps.formData.id) {
      this.setState({
        id: this.props.formData.id,
        name: this.props.formData.name,
        shortDescription: this.props.formData.shortDescription,
        active: this.props.formData.active,
        error: '',
      });
    }
  }

  validateForm() {
    const { id, name, shortDescription } = this.state;

    if (!id || id === 0) {
      this.setState({
        error: 'You must specify a programme ID and it can\'t be 0!'
      });
      return true;
    }

    if (!name) {
      this.setState({
        error: 'You must specify a programme name!'
      });
      return true;
    }

    if (!shortDescription) {
      this.setState({
        error: 'You must specify a programme description!'
      });
      return true;
    }
  }

  onResetForm() {
    this.setState({
      id: 0,
      name: '',
      shortDescription: '',
      active: false,
      error: '',
    });
  }

  onSubmitForm() {
    const { onSubmit: submitForm } = this.props;
    const { id, name, shortDescription, active } = this.state;
    console.log('submitting the form');

    if (this.validateForm()) {
      return;
    }

    const programme = {
      id: id,
      name: name,
      shortDescription: shortDescription,
      active: active,
    };

    submitForm(programme);
    this.onResetForm();
  }

  render() {
    const { id, name, shortDescription, active, error } = this.state;
    const { isEditing } = this.props;

    return (
      <form>
        <div className="field">
          <label className="label">{constants.tableTitles.id}</label>
          <div className="control">
            <input
              className="input"
              type="number"
              placeholder="Enter an ID..."
              value={id}
              onChange={(event) => this.setState({ id: Number(event.target.value) })}
              disabled={isEditing}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">{constants.tableTitles.name}</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter a name..."
              value={name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">{constants.tableTitles.description}</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Enter a description..."
              value={shortDescription}
              onChange={(event) => this.setState({ shortDescription: event.target.value })}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={active}
                onChange={() => this.setState({ active: !this.state.active })}
              />
              <LabelText>{constants.form.checkboxLabel}</LabelText>
            </label>
          </div>
        </div>

        {error.length > 0 &&
          <Notification className="message is-danger">
            <div className="message-body">
              {error}
            </div>
          </Notification>
        }

        <div className="field">
          <div className="control">
            <Button
              className="button is-link"
              type="submit"
              onClick={this.onSubmitForm}
            >
              {constants.buttons.save}
            </Button>
          </div>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
};
