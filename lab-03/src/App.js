import React from 'react';
import './App.css';

// import our components
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './nav/Navigation';

// import from react-router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      // wrap the routes in a BrowserRouter so the Browser URL
      // is used to determine which Routes match
          <BrowserRouter>
          <div className="App">
            <Navigation />
            <div className="container">
              <Switch>
                <Route path="/projects" component={Projects}/>
                <Route path="/employees" component={Employees}/>
                <Route path="/timesheets" component={Timesheets}/>
                <Redirect to="/employees"/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
