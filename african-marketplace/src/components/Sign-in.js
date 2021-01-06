import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import "../SignIn.css";

function SignIn(props) {
  //manage state for the form inputs
  const [formState, setFormSate] = useState({
    username: "",
    password: "",
  });
  //managing error state
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  //submit state checks whether the form can be submited
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //inline validation on one key/value pair at a time
  const validateChange = (event) => {
    //.reach is in the yup library
    //returns a promise
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        //value from valid comes from .validate
        //if the input is passing formSchema
        setErrors({ ...errors, [event.target.name]: "" });
      })
      .catch((error) => {
        //if the input is breakign formSchema
        //capture the error message
        setErrors({ ...errors, [event.target.name]: error.errors[0] });
      });

    //need to call this function the onChange function = inputChnage
  };

  //onChange function
  const inputChange = (event) => {
    //allows us to pass around synthertic events
    event.persist();

    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };

    //event is being passed in to the validateChange function i created
    validateChange(event);

    setFormSate(newFormState);
  };

  //form schema set of rules
  //object is coming from yup library
  //shape function takes in an object {}
  const formSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  useEffect(() => {
    //isValid comes from the yup library
    //checking formSchema against formState
    //comparing the keys and the values
    //returns a promise
    formSchema.isValid(formState).then((valid) => {
      //we can check the process has been completed
      setButtonDisabled(!valid);
    });
  }, [formSchema, formState]);
  //do something every time formState changes

  //onSubmit function
  const formSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signIn">
      <p className="loginTitle">Log In</p>
      <form onSubmit={formSubmit}>
        <div className="loginForm">
          <label htmlFor="username">
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={formState.username}
              placeholder="USERNAME"
              onChange={inputChange}
            />
            {errors.username.length > 0 ? <p>{errors.username}</p> : null}
          </label>
        </div>
        <div className="loginForm">
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="password"
              name="password"
              value={formState.password}
              placeholder="PASSWORD"
              onChange={inputChange}
            />
            {errors.password.length > 0 ? <p>{errors.password}</p> : null}
          </label>
        </div>
        <button type="submit" disabled={buttonDisabled}>
          Log In
        </button>
        <p>
          <Link className="" to="/signup">
            Not a member?
          </Link>
        </p>
        <p>
          <Link className="" to="/">
            Home Page
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
