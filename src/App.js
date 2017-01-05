import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var waveform = new window.Waveform({
      container: document.getElementById("test"),
      data: this.props.data,
      innerColor: "#2ec6b3",
      outerColor: "#d6822a",
      width: "2000"
    });
    return (
      <div className="App">
       <p>Sample waveform render</p>
       <br />
      </div>
    );
  }
}


export default App;
