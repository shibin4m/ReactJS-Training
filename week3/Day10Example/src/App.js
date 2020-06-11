import React from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import ContactProvider from "./ContactProvider";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

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
					<Route path="/">
						<ContactList></ContactList>
					</Route>
				</Switch>
			</Router>
		</ContactProvider>
	);
}

export default App;
