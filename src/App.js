import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  textoCambiado = (algo) => {
    this.setState(() => ({
      text: algo
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    {JSON.stringify(this.state)}
        <div className="container">
          <input
			onChange={(evento) => this.textoCambiado(evento.target.value)}
			type="text"
			placeholder="Say Something" />
          <p className="echo">Echo:{this.state.text}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
