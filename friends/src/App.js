// Modules
import { Route, Switch, useHistory } from 'react-router-dom';

// Components
import Login from './components/Login';
import Friends from './components/Friends';

// Styles
import './App.css';

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Switch>
        <Route path="/friends" component={Friends}/>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
