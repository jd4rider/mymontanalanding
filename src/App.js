import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import RowOfCards from './components/RowOfCards';
import Footer from './components/Footer';
import JumbotronClass from './components/helpers/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <JumbotronClass />
        <Container>
          <RowOfCards />
        </Container>
        <br /><br />
        <Footer />
      </div>
    );
  }
}

export default App;
