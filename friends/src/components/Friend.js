import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Friend({ friend, friends, setFriends }) {
  const editFriend = (friend) => {
    axiosWithAuth()
      .put(`/api/friends/${friend.id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log({ err })
      })
  };

  const deleteFriend = (friend) => {
    axiosWithAuth()
      .delete(`/api/friends/${friend.id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log({ err })
      })
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
          value={friend}
          onClick={() => editFriend(friend)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          className="friend-button"
          value={friend}
          onClick={() => deleteFriend(friend)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}
