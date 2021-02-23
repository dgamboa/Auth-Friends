// Modules
import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';

// Components
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import NavBar from './components/NavBar';

// Styles
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  })

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn}/>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends}/>
        <PrivateRoute exact path="/add-friend" component={AddFriend}/>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
