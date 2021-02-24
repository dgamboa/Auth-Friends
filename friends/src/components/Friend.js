import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Friend({ friend }) {
  const editFriend = () => {
    console.log("edit")
  };

  const deleteFriend = () => {
    console.log("delete")
  };

  return (
    <Card className="friend">
      <Card.Body>
        <Card.Title>{friend.name}</Card.Title>
        <Card.Text>
          Age: {friend.age}
        </Card.Text>
        <Card.Text>
          Email: {friend.email}
        </Card.Text>
        <Button
          variant="primary"
          className="friend-button"
          onClick={editFriend}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          className="friend-button"
          onClick={deleteFriend}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}
