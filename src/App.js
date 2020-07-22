import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import './App.css';
import NavBar from './components/NavBar';
import QuizList from './containers/QuizList';
import ExamList from './containers/ExamList'
import BookList from './containers/BookList'
import DvdList from './containers/DvdList'
import MovieList from './containers/MovieList'
import RetrogameList from './containers/RetrogameList'
import axios from "axios"

class App extends Component {
  
  constructor() {
    super()
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios.get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if (
        response.data.logged_in &&
        this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) 
      {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        });
      } 
      else if (
        !response.data.logged_in &
        (this.state.loggedInStatus === "LOGGED_IN")
      ) 
      {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    })
    .catch(error => {
      console.log("check login error", error);
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
    
  }
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path={"/"} render={props => ( <Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus}/> )} />
            <Route exact path={"/dashboard"} render={props => ( <Dashboard {...props} loggedInStatus={this.state.loggedInStatus}/> )} />
            <Route exact path="/quizzes" component={QuizList} />
            <Route exact path="/exams" component={ExamList} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/dvds" component={DvdList} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/retrogames" component={RetrogameList} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;