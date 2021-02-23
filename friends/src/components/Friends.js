// Modules
import React, { useState, useEffect } from 'react'

// Utils
import { axiosWithAuth } from "../utils/axiosWithAuth";

// Components
import Friend from './Friend';

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, [])

  const getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response.data.error);
      })
  }
  
  return (
    <div>
      {
        friends.map(friend => {
          return <Friend friend={friend} />
        })
      }
    </div>
  )
}
