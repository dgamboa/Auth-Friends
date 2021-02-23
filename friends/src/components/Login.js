import React, { useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: ""
};

export default function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

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
        history.push("/friends");
      })
      .catch(err => {
        setError(err.response.data.error)
      });
    setIsLoading(false);
  }

  return (
    <div>
      <form onSubmit={login}>
        <label>Username: 
          <input 
            type="text"
            name="username"
            value={credentials.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Password: 
          <input 
            type="password"
            name="password"
            value={credentials.password || ""}
            onChange={handleChange}
          />
        </label>
        {
          isLoading
            ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            : <button>Log In</button>
        }
        <p>{error}</p>
      </form>
    </div>
  )
};