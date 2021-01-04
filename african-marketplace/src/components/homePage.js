import SignIn from "./Sign-in";
import { Link, useHistory } from "react-router-dom";

function Homepage(props) {
  return (
    <div>
      <h1>homepage</h1>
      <Link to="/sign-in">Sign In</Link>
    </div>
  );
}

export default Homepage;
