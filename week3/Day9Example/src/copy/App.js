import React, { useState, createContext } from 'react';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import ContactContext from "./ContactContext";

export const App = () => {  

  return (
    <ContactContext>
      <section id="contact-list">
        <ContactForm></ContactForm>
        <h1>Contacts</h1>
        <ContactList></ContactList>
      </section>
    </ContactContext>
  );
}


