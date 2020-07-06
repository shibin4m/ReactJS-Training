import React, { createContext, useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";
// import data from "./data/contacts.json";
import { useContext } from "react";
import Axios from 'axios';
var data=[];

const Base_Api = 'http://localhost:8080';
const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(data);
  const [contact, setContact] = useState(data);

  

  useEffect(() => {
    BindContacts();
  }, []);

  const deleteContact = (contactid) => {
    // const newContacts = contacts.filter((contact) => contact.id !== contactid);
    // setContacts(newContacts);
    Axios
      .delete(`${Base_Api}/contact/${contactid}`).then(() => {
        BindContacts();
      })
  };

  const BindContacts = () => {
    Axios
      .get(`${Base_Api}/contact`).then((result) => {
        //debugger;
        console.log(result);
        setContacts(result.data);
      });
  };

  const addContact = (name, email,phone) => {
    const newContact = {     
      name,
      email,
      phone,
    };

    Axios
      .post(`${Base_Api}/contact`, newContact).then((result) => {
        const newContact = result.data;
        const newContacts = [...contacts, newContact];       
        setContacts(newContacts);
      });   
  };

  const updateContact = (id,name, email,phone) => {
      const newContact = {     
      name,
      email,
      phone,
    };     

    Axios
      .put(`${Base_Api}/contact/${id}`, newContact).then((result) => {
        BindContacts();
      });   
  };

  

  const editContact =(contact) =>{
  // alert(contact.id);  
   setContact(contact);   
   //window.location.href = '/edit?id=' + contact.id
  };

 
  return (
    <ContactContext.Provider value={{ contacts, deleteContact, addContact, editContact,updateContact,contact }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
