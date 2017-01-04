import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  
        <p>{this.props.data.map(item => <h2> {item}</h2>) }</p>
      </div>
    );
  }
}

export default App;
