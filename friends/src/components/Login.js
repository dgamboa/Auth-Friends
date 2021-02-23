import React, { useState } from "react";

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