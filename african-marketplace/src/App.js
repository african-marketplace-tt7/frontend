import {Route, Link, Switch} from 'react-router-dom'
import React, {useState} from 'react'
import './App.css';

import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoute'


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Switch>

        {/* App Front End */}
        <div id='page-wrapper'>
          <Route exact path="/dashboard" component={HomePage}/>
        </div>

      </Switch>
    </div>
  );
}

export default App;
