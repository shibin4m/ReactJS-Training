import React, { useState,createContext } from 'react';
import ContactList from "./ContactList";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import { v4 as uuidv4 } from 'uuid'

export const ContactContext = createContext();

export const App = () => {

 

  const stateArray = useState(Contacts);
  const contacts = stateArray[0];
  const updateContact = stateArray[1];

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    updateContact(newContacts);
  };

  const addContact = (contactInfo) => {
    const id = uuidv4();
    contactInfo.id = id;
    const newContact = [...contacts, contactInfo];
    updateContact(newContact);
  }

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
    <section id="contact-list">
      <ContactForm></ContactForm>
      <h1>Contacts</h1>
      <ContactList></ContactList>
    </section>
    </ContactContext.Provider>
  );
}

