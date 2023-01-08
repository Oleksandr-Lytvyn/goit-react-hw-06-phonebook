import { useEffect } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { InputForm } from './InputForm/InputForm';
import { ContactForm } from './ContactForm/ContactForm';

const startContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem('contacts')) {
      return JSON.parse(localStorage.getItem('contacts'));
    }
    return startContacts;
  });
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact, newPhone) {
    if (contacts.find(cont => cont.name === newContact)) {
      alert(`${newContact} is already`);
      return;
    }
    setContacts([
      ...contacts,
      { id: nanoid(), name: newContact, number: newPhone },
    ]);
  }
  function deleteContact(input) {
    const updatedContacts = contacts.filter(
      cont => input.target.id !== cont.id
    );
    setContacts(updatedContacts);
  }

  return (
    <section>
      <h1>Phonebook</h1>
      <InputForm addContact={addContact} />
      <ContactForm
        contacts={contacts}
        addFilter={setFilter}
        filter={filter}
        deleteContact={deleteContact}
      />
    </section>
  );
}
