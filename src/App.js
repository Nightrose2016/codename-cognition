import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import './App.css';
import NavBar from './components/NavBar';
import Quizzes from './containers/Quizzes';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/quizzes" component={Quizzes} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;