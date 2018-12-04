import React, { Component } from 'react';

import mouseTrap from 'react-mousetrap'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.bindShortcut('a', () => alert('a'))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default mouseTrap(App);
