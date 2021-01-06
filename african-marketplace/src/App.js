import { Route, Link, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

import { ThemeProvider } from "styled-components";
import siteTheme from "./components/styledComponents/SiteTheme";

import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
	const [loggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="App">
			<Switch>
				{/* App Front End */}
				<div id="page-wrapper">
					<Route exact path="/dashboard" component={Dashboard} />
				</div>

				<ThemeProvider theme={siteTheme}>{/*<Unit2Stuff/>*/}</ThemeProvider>
			</Switch>
		</div>
	);
}

export default App;
