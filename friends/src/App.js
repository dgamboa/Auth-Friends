// Modules
import { Route, Switch } from 'react-router-dom';

// Components
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends}/>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
