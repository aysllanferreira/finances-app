import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotFound } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} path="*" />
      </Switch>
    </div>
  );
}

export default App;
