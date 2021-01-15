import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history.push("/home"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            margin="normal"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
            margin="normal"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="loginbtn"
            variant="contained"
            color="primary"
            size="small"
            onClick={signIn}
            type="submit"
          >
            Sign in
          </Button>
        </form>
        <p>
          <small>By signing-in, you agree to our terms & conditions</small>
        </p>
        <Button className="signupbtn" variant="contained" onClick={register}>
          Create an account
        </Button>
      </div>
    </div>
  );
}

export default Login;
