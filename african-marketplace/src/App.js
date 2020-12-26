import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/homePage";
import Login from "./ViewsPages/Login";
const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        {/* Default page (use localSorage to skip if already signed in) */}
        <Homepage />
      </Route>

      <Route path="/login">
        {/* default for logging in */}
        <Login />
      </Route>
    </Switch>
  </div>
);

export default App;
