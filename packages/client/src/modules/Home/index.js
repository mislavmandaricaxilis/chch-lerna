import React, { Component } from 'react';

import logo from './logo.svg';
import './home.scss';

class Home extends Component {
  state = {
    message: ''
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.requestServerMessage = this.requestServerMessage.bind(this);
  }

  async componentDidMount() {
    await this.requestServerMessage();
  }

  async handleClick() {
    await this.requestServerMessage();
  }

  async requestServerMessage() {
    const result = await fetch('api/');
    if (result.ok) {
      const message = await result.text();
      this.setState({ message: message });
    } else {
      this.setState({ message: 'No server message' })
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
          <button onClick={this.handleClick}>Get server message</button>
        </p>
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default Home;
