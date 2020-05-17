const data = [
    {
        name: "Shinto Thomas",
        email: "sthomas@suyati.com",
    },
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com",
    },
    {
        name: "Shamnad V A",
        email: "sabdul@suyati.com",
    },
];

var style = {
    color: 'Blue',
    fontSize: 16,
  };


//   const ContactList = ({ contacts }) => {
//     return React.createElement(
//         "table",
//         { className: "contacts-table" },
//         React.createElement(
//             "tbody",
//             null,
//             React.createElement(
//                 "tr",
//                 null,
//                 React.createElement("th", null, "Name"),
//                 React.createElement("th", null, "Email")
//             ),
//             contacts.map((contact, i) =>
//                 React.createElement(
//                     "tr",
//                     { key: i },
//                     React.createElement("td", null, contact.name),
//                     React.createElement("td", null, contact.email)
//                 )
//             )
//         )
//     );
// };


//Replacing the above create element using html since we are using babel
const ContactList = ({ contacts }) => {
 return   <table style={style}>
        <tbody >
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contacts.map((contact, i) => {
                return <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                </tr>
            })}
        </tbody>
    </table>

};

//sample1 contactManagement
// const contactManagement = <section id="contact-list">
// <h1>Contacts</h1>
//   <table class="contacts-table">
//     <tr>
//       <th>Name</th>
//       <th>Email</th>
//     </tr>
//     <tr>
//       <td>Shinto Thomas</td>
//       <td>sthomas@suyati.com</td>
//     </tr>
//     <tr>
//       <td>Praphul</td>
//       <td>pnangeelil@suyati.com</td>
//     </tr>
//     <tr>
//       <td>Shamnad V A</td>
//       <td>sabdul@suyati.com</td>
//     </tr>
//   </table>
// </section>

//sample2 contactManagement - replace above using ContactList object we created
const contactManagement = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contacts={data}></ContactList>
</section>

ReactDOM.render(contactManagement, document.getElementById("react-container"));

//console.log("element", contactManagement);