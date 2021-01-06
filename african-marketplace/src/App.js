import SignupForm from './components/SignupForm/SignupForm';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homePage";
import SignIn from "./components/Sign-in";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
