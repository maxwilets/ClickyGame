import React, { Component } from 'react';
import './App.css';
import Nav from "./components/header/header"
import Board from "./components/board/board"

class App extends Component {
  render() {
    return (
      <div className="App">
         <Nav />
         <Board />
      </div>
    );
  }
}

export default App;
