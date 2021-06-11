import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Consumer from './pages/Consumer';
import Business from './pages/Business';
import Developer from './pages/Developer';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <Router basename="/misso-web">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consumers" component={Consumer} />
        <Route path="/business" component={Business} />
        <Route path="/developer" component={Developer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
