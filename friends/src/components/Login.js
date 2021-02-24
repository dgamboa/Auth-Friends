import React, { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const initialState = {
  username: "",
  password: ""
};

export default function Login(props) {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.location.state) {
      setError(props.location.state.error)
    }
  }, [])

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  }

  const login = e => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        const token = JSON.stringify(res.data.payload);
        localStorage.setItem("token", token);
        props.setLoggedIn(true);
        props.history.push("/friends");
      })
      .catch(err => {
        console.log({err})
        // setError(err.response.data.error)
      });
    setIsLoading(false);
  }

  return (
      <Form className="w-25 login-form" onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={credentials.username || ""}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={handleChange}
          />
        </Form.Group>
        {
          isLoading
            ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            : <Button variant="primary" type="submit">
                Log In
              </Button>
        }
        <p>{error}</p>
      </Form>
  )
};