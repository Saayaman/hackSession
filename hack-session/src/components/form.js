import React, { Component } from 'react';
import axios from 'axios';


 state = {
    email: '',
    password: '',
  }

  handleSubmit = () => {

    const { email, password } = this.state;

    const data = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log('email', this.state.email);
    
    // try {
    //   axios({
    //     method: 'post',
    //     url: 'myurl',
    //     data: data,
    //     config: { headers: {'Content-Type': 'multipart/form-data' }}
    // })
    //     .then(function (response) {
    //         //handle success
    //         console.log(response);
    //     })
    //     .catch(function (response) {
    //         //handle error
    //         console.log(response);
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
  }


  handleEmailChange = (e) => {
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
