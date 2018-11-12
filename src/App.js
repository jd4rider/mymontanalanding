import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import RowOfCards from './components/RowOfCards';
import JumbotronClass from './components/helpers/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <JumbotronClass />
        <Container>
          <RowOfCards />
        </Container>
      </div>
    );
  }
}

export default App;
