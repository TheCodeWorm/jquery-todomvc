import React, { Component } from 'react';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'login',
      isLoggedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries
    }})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'logout') {
      this.setState({isLoggedIn: false})
    } else if (route === 'home') {
      this.setState({isLoggedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isLoggedIn, route } = this.state;
    return (
      <div className="App">
        { route === 'home'
          ? <div>
            </div>
          : (
             route === 'login'
             ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <div></div>
            )
        }
      </div>
    );
  }
}

export default App;