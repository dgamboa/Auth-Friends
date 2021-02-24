import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const login = () => {
    history.push("/login");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  };
  
  const friends = () => {
    history.push("/friends");
  }

  const addFriend = () => {
    history.push("/add-friend");
  }

  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link onClick={goHome}>Home</Nav.Link>
      </Nav.Item>
      {
        loggedIn
          ? <Nav.Item as="li">
              <Nav.Link eventKey="link-1" onClick={logout}>Logout</Nav.Link>
            </Nav.Item>
          : <Nav.Item as="li">
              <Nav.Link eventKey="link-2" onClick={login}>Login</Nav.Link>
            </Nav.Item>
      }
      {
        loggedIn &&
        <>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" onClick={friends}>Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" onClick={addFriend}>Add Friend</Nav.Link>
          </Nav.Item>
        </>
      }
    </Nav>
  )
}
