import React, { Component } from 'react';
import './App.css';

/*React Components*/
import Nav from "./components/Nav/Nav.js";
import Landing from "./components/Landing/Landing.js";
import About from "./components/About/About.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
