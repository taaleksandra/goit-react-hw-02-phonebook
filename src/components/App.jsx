import React, { Component } from 'react';
import clsx from 'clsx';

import css from '../components/App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = value => {
    const test = this.state.contacts.find(
      contact => contact.name === value.name
    );

    if (test) {
      alert(`${value.name} id already in contacts`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, value],
      };
    });
  };

  findContact = value => {
    this.setState({ filter: value });
  };

  deleteContact = value => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== value),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={clsx(css.phonebook)}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <Filter onChange={this.findContact} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
