import React from 'react';
import backgroundimg from '../../assets/images/MontanaKitchen.png'
import { Jumbotron, Button, Container } from 'reactstrap';

export default class JumbotronCustom extends React.Component {
  render () {
    return (
      <Jumbotron style={{backgroundImage: 'url('+backgroundimg+')', backgroundSize: 'cover', color: 'white'}}> 
        <Container>
          <h1 className="display-3">Members Dashboard</h1>
          <p className="lead">This is the Member Dashboard for My Montana Kitchen</p>
          <hr className="my-2" color='white' />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary" href='/'>Home</Button>
            <Button color="primary" href='/account'>Account</Button>
          </p>
        </Container>
      </Jumbotron>
    )
  }
}