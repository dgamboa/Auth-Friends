import React from 'react';

export default function Friend({ friend }) {
  return (
    <div>
      <h2>{friend.name}</h2>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  )
}
