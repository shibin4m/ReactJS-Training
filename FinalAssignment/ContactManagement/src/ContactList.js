import React from "react";
// import { FaMinusCircle } from "react-icons/fa";
import "./ContactList.css";
import { useContactContext } from "./ContactProvider";
import { Link } from 'react-router-dom';

const ContactList = () => {
	// const { contacts, deleteContact, editContact } = useContactContext();
	const { contacts, deleteContact } = useContactContext();

	return (
		<>
			<h1>Contact List</h1>
			<table className="contacts-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						{/* <th>Actions</th> */}
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<tr key={contact.id}>
							<td>{contact.name}</td>
							<td>{contact.email}</td>
							<td>{contact.phone}</td>
							<td>							
							{/* <button className="action-icon"
								onClick={() => editContact(contact)}
								>
								Edit
							</button> */}
							{/* <Link to={{ 
									pathname: "/edit", 
									contact: contact 
								   }}>
									Edit
							</Link> */}
							{/* <Link to={{ pathname: '/edit', state: { contact: {...contact}} }}>My route</Link> */}
							<Link to={`/edit/${contact.id},${contact.name} ,${contact.email},${contact.phone}`}>Edit</Link>
							</td>
							<td>
								<button
									className="action-icon"
									onClick={() => deleteContact(contact.id)}
								>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ContactList;
