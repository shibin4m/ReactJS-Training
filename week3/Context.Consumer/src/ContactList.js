import React, { useContext } from "react";
import "./ContactList.css";
import { ContactContext } from "./App";

const ContactList = () => {
	// const { contacts, deleteContact } = useContext(ContactContext);

	return (
		<ContactContext.Consumer>
			{({ contacts, deleteContact }) =>
				(
					<table className="contacts-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((contact) => (
								<tr key={contact.id}>
									<td>{contact.name}</td>
									<td>{contact.email}</td>
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
				)
			}
		</ContactContext.Consumer>
	);
};

export default ContactList;
