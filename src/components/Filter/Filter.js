import React, { Component } from 'react';
import clsx from 'clsx';

export class Filter extends Component {
  handleChange = evt => {
    // console.log(evt.target.value);
    let searchingName = evt.target.value;
    return this.props.onChange(searchingName);
  };
  render() {
    return (
      <div>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          onChange={this.handleChange}
          id="filter"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
    );
  }
}
