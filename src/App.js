import React, {Component} from 'react';
import {browserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
// import NavBar from './components/NavBar';




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
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
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
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
