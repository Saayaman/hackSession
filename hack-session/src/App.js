import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    email: '',
    password: '',
  };

  handleLogin = () => {

    const data = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log('email', this.state.email);
    
    try {
      axios({
        method: 'post',
        url: '/login',
        data: data,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  }


  handleEmailChange = (e) => {

    console.log('emila!', e.target.value)
    this.setState({email: e.target.value});
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}

export default App;
