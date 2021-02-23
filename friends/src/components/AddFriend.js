import React, { useState } from 'react';

const initialValues = {
  name: "",
  age: null,
  email: ""
};

export default function AddFriend() {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const addFriend = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addFriend}>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={formValues.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  )
}
