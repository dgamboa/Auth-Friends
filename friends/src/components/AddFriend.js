import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
  name: "",
  age: 0,
  email: ""
};

export default function AddFriend() {
  const [formValues, setFormValues] = useState(initialValues);

  const history = useHistory();

  const handleChange = e => {
    const value = e.target.name === "age"
      ? parseInt(e.target.value) || ""
      : e.target.value
    
    setFormValues({
      ...formValues,
      [e.target.name]: value
    });
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValues)
      .then(() => {
        history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <form onSubmit={addFriend}>
      <label>Name: 
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <label>Age: 
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleChange}
        />
      </label>
      <label>Email: 
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
