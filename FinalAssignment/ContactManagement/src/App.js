import React from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import ContactProvider from "./ContactProvider";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import UpdateContact from "./UpdateContact";


function App() {
  return (
		<ContactProvider>
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">HOME</Link>
							</li>
							<li>
								<Link to="/add">ADD CONTACT</Link>
							</li>						
						</ul>
					</nav>
				</div>
				<Switch>
					<Route path="/add">
						<ContactForm></ContactForm>
					</Route>
					<Route
      exact
      path="/edit/:id,:name,:email,:phone"
      component={UpdateContact}
 />
					{/* <Route path="/edit/:contact" exact component={UpdateContact} /> */}
					{/* <Route path="/edit" >
						<UpdateContact></UpdateContact>
					</Route> */}
					<Route path="/">
						<ContactList></ContactList>
					</Route>
				</Switch>
			</Router>
		</ContactProvider>
	);
}

export default App;
