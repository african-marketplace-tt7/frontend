import { Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/Sign-in";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
	return (
		<div className="App">
			<Switch>
				{/* App Front End */}
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={SignIn} />
				<Route exact path="/" component={SignIn} />
				<Route exact path="/signup" component={SignupForm} />
			</Switch>
		</div>
	);
}

export default App;
