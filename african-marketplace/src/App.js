import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Pages/homePage";
import Login from "./ViewsPages/Login";
import Signup from "./ViewsPages/Signup";
import MainLogin from "./ViewsPages/MainLogin";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        {/* Default page (use localSorage to skip in already signed in) */}
        <Homepage />
      </Route>

      <Route path="/login">
        {/* default for logging in */}
        <Login />
      </Route>

      <Route path="/signup">
        {/* default for signing up */}
        <Signup />
      </Route>

      <Route path="/recipes">
        {/* default after sign in */}
        <MainLogin />
      </Route>
    </Switch>
  </div>
);

export default App;
