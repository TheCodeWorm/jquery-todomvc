import React, { Component } from 'react';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'Login',
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
    } 
    this.setState({route: route});
  }

  render() {
    const { isLoggedIn, route, user } = this.state;
    return (
      <div className="App">
        { route === 'Login' || isLoggedIn === false
          ? <div>
              <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>
          : ( route === 'home'
              ?  <div>
			             <div>Employee Training</div>
			             <div>{ user.name } logged in.</div>
		             </div>
		           : <div></div>
            )
        }
      </div>
    );
  }
}

export default App;