import React, { useState } from "react";

import FormInput from "../custom-button/custom-button";
import "./sign-in.scss";

import CustomButton from "../custom-button/custom-button.js";

function SignIn() {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });
  const handleSubmit = event => {
    event.preventDefault();

    setLogin({ email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setLogin(prevInputData => ({ ...prevInputData, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={login.email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={login.password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <CustomButton type="submit"> Sign-In</CustomButton>
      </form>
      <h2>{login.email}</h2>
    </div>
  );
}

export default SignIn;
