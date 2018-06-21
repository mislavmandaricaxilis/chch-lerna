import React, { Component } from 'react';

import logo from './logo.svg';
import './home.css';

class Home extends Component {
  state = {
    message: ''
  }

  async componentDidMount() {
    const result = await fetch('api/');
    if (result.ok) {
      const message = await result.text();
      this.setState({ message });
    }
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/modules/Home/index.js</code> and save
          to reload.
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default Home;
