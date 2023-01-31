import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import defaultContacts from "./DefaultContacts/defaultContacts";



export function App () {
  const [contacts , setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contact')) ?? defaultContacts;
  });
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts));
  },[contacts])


  const handleSubmit = e => {
    const id = nanoid(5);
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ id, name, number });
    }

    setContacts({ contactsLists });
  };

  const handleDelete = (id) => {
    setContacts(prev => prev.filter(contacts => contacts.id !== id));
  };

  const handleChange = e => {
    setFiltered(e.currentTarget.value)
  };

  const handleFilter = () => {
    const filterContactsList = filtered.toLowerCase();
    return contacts.filter(({ name }) => 
    name.toLowerCase().includes(filterContactsList));
  };
  

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101'
      }}
    >
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit}/>
      </Section>

      <Section title="Contacts">
        <Filter filter={filtered} onChange={handleChange}/>
        <ContactList contacts={handleFilter()} onDelete={handleDelete}/>
      </Section>
    </div>
  );
};
