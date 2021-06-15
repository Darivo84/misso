import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Consumer from './pages/Consumer';
import Business from './pages/Business';
import Developer from './pages/Developer';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router basename="/misso">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consumers" component={Consumer} />
        <Route path="/business" component={Business} />
        <Route path="/developer" component={Developer} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        />
        {/* <Route path="/dashboard"  /> */}
      </Switch>
    </Router>
  );
}

export default App;
