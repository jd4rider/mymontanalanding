import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header"> */}
        <Jumbotron> 
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
          <Button color="primary">Learn More</Button>
        </p></Jumbotron>
          {/* <img src={logo} className="App-logo" alt="logo" />
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
        </header> */}
      </div>
    );
  }
}

export default App;
