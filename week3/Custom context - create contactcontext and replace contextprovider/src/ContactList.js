import React from "react";
import {useContactContext} from "./ContactContext";

var style = {
    color: 'Blue',
    fontSize: 16,
};

const ContactList = () => {
    const { contacts, deleteContact } = useContactContext();
    //const { contacts, deleteContact } = props;


    return <table style={style}>
        <tbody >
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            {contacts.map((contact, i) => {
                return <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td onClick={() => { deleteContact(contact.id) }}>Delete</td>
                </tr>
            })}
        </tbody>
    </table>

};

export default ContactList;