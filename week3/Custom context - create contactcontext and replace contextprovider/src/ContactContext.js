import React, { useState, createContext, useContext } from "react";
import contact from './Contacts';
import { v4 as uuidv4 } from 'uuid'

const Context = createContext();
export const useContactContext = () => useContext(Context);

const ContactContext = (props) => {

    const stateArray = useState(contact);
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
        <Context.Provider value={{ contacts, addContact, deleteContact }}>
            {props.children}
        </Context.Provider>
    )

}

export default ContactContext;