import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState((prev) => ({
      ...prev, [name]: value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addContacts(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='nameInput'>Name:</label>
          <input
            id='nameInput'
            type='text'
            required
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='numberInput'>Name:</label>
          <input
            id='numberInput'
            type='tel'
            required
            name='number'
            value={this.state.number}
            onChange={this.handleChange}
          />
        </div>
        <button>Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
