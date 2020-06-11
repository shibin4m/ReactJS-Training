import React from "react";
import {useInput} from './hooks';
import {useContactContext} from './ContactContext';


const ContactForm = () => {
    const { addContact } = useContactContext();

    const[name,onChangeHandlerForName,resetForName] = useInput("");
    const[email,onChangeHandlerForEmail,resetForEmail] = useInput("");

     const submit = (event) => {
        event.preventDefault();

        const newContact = { name: name, email: email };
        addContact(newContact);
        resetForName("");
        resetForEmail("");
    }

    return (
        <form onSubmit={submit} className="contact-form">
            <label htmlFor="name">Name:</label>
            <br></br>
            <input
                id="name"
                value={name}
                onChange={onChangeHandlerForName}
                type="text"
                placeholder="name..."
                required
            />
            <br></br>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
                id="email"
                value={email}
                onChange={onChangeHandlerForEmail}
                type="text"
                placeholder="email..."
                required
            />
            <button className="add-button">
                Add
          </button>
        </form>
    );
}

export default ContactForm;