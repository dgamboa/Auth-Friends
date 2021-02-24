// Modules
import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

// Components
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import NavBar from './components/NavBar';

// Styles
import './App.css';

const initialLoggedIn = () => {
  return !!localStorage.getItem("token");
};

function App() {
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn);

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends}/>
        <PrivateRoute exact path="/add-friend" component={AddFriend}/>
        <Route
          path="/"
          render={(props) => {
            return <Login {...props} setLoggedIn={setLoggedIn}/>
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
