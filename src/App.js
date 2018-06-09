import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tiny App</h1>
        </header>
        <p className="App-intro">
          To get started, enter in a url here:
          <form>
            <label>
              URL:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </p>
      </div>
    );
  }
}

export default App;
