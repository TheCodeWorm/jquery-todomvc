import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({loginEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({loginPassword: event.target.value})
  }

  onSubmitLogin = () => {
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.loginEmail,
        password: this.state.loginPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="">
        <main className="">
          <div className="">
            <fieldset id="" className="">
              <legend className="">Employee Portal</legend>
              <div className="">
                <label className="">Email</label>
                <input
                  className=""
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="">
                <label className="" htmlFor="password">Password</label>
                <input
                  className=""
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitLogin}
                className=""
                type="submit"
                value="Log in"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Login;