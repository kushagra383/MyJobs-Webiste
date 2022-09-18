import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JobDetailsPage from './pages/JobDetailsPage';
import Homepage from './pages/HomePage';
import React, { useState } from 'react';

const App = () => {
  const [authToken, setAuthToken] = useState('');
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage authToken={authToken} />
        </Route>
        <Route path="/login">
          <LoginPage authToken={authToken} setAuthToken={setAuthToken} />
        </Route>
        <Route path="/jobs">
          <JobDetailsPage authToken={authToken} setAuthToken={setAuthToken} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
