import React from "react";
import { useContactContext } from "./ContactProvider";
import { useInput } from "./hooks";
import "./ContactForm.css";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  const history =useHistory();
  const [name, updateName, resetName] = useInput("");
  const [email, updateEmail, resetEmail] = useInput("");
  const[phone,updatePhone,resetPhone] =useInput("");

  const { addContact } = useContactContext();

  const submit = (event) => {
    event.preventDefault();
    addContact(name, email,phone);
    resetName();
    resetEmail();
    resetPhone();
    history.push('/');
  };

  return (
    <>
    <h1>Contact form</h1>
    <form onSubmit={submit} className="contact-form">
      <label htmlFor="email">Name:</label>
      <br></br>
      <input
        id="name"
        value={name}
        onChange={updateName}
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
        onChange={updateEmail}
        type="text"
        placeholder="email..."
        required
      />
      <br></br>
      <label htmlFor="phone">Phone:</label>
      <br></br>
      <input id="phone"
      value={phone}
      onChange={updatePhone}
      type="number"
      placeholder="phone..."
      required/>
      <button className="add-button">Add</button>
    </form>
    </>
  );
};

export default ContactForm;
