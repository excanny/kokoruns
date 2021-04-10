import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RegisterSuccess from './components/RegisterSuccess';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import CompanyRegister from './components/CompanyRegister';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <Router>

        <div>
    
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} /> 
              <Route path="/registersuccess" component={RegisterSuccess} />
              {/* <Route path="/user-dashboard" component={Dashboard} /> */}
              <Route path="/user-dashboard-experience" component={Experience} />
              <Route path="/user-dashboard-education" component={Education} />
              <Route path="/user-dashboard-portfolio" component={Portfolio} />
              <Route path="/company-register" component={CompanyRegister} />
            </Switch>

        </div>

    </Router>
    )
  }
}

export default App
