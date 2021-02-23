import React, { useState } from "react";
import axios from 'axios';

const initialState = {
  username: "",
  password: ""
};

export default function Login() {
  const [credentials, setCredentials] = useState(initialState);
  const [error, setError] = useState("");

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError("");
  }

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        const token = JSON.stringify(res.data.payload);
        localStorage.setItem("token", token);
        // go to next page with history.push
      })
      .catch(err => {
        setError(err.response.data.error)
      })
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
        <button>Log In</button>
        <p>{error}</p>
      </form>
    </div>
  )
};