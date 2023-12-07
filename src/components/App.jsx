import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact/SearchContact';

class App extends Component {
  state = {
    contacts: [],
    nameForSearch: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    const parseNewContacts = JSON.stringify(newContacts);

    if (newContacts !== prevContacts) {
      localStorage.setItem('contacts', parseNewContacts);
    }
  }

  addContacts = (data) => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    if (contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase())) {
      alert('The name already exists');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  getContactForSearch = (name) => this.setState({ nameForSearch: name });

  searchContacts = () => {
    return this.state.contacts.filter(
      i => i.name.toLowerCase()
        .includes(this.state.nameForSearch.toLowerCase()));
  };

  render() {
    const contacts = this.searchContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <SearchContact getContactForSearch={this.getContactForSearch} />
        {
          contacts.length > 0 &&
          <ContactList
            contacts={contacts}
            deleteContact={this.deleteContact}
          />
        }
      </div>
    );
  }
}

export default App;
