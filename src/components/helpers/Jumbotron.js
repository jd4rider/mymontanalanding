import React from 'react';
import backgroundimg from '../../assets/images/MontanaKitchen5.png'
import { Jumbotron, Button, Container } from 'reactstrap';

export default class JumbotronCustom extends React.Component {
  constructor (props) {
    super(props);

    this.get_url = () => {
      console.log('Logout Clicked, woot woot!!!')
      fetch(`${window.location.protocol}/members`, {
        method: 'post'
      }).then(function(response) {
        window.location.href = '/login';
      });
    }

    this.state = {
      logout_url : ''
    }
  }


  render () {
    return (
      <Jumbotron style={{backgroundImage: 'url('+backgroundimg+')', backgroundSize: 'cover', color: 'white' }}> 
        <Container>
          <h1 className="display-3">Members Dashboard</h1>
          <p className="lead">This is the Member Dashboard for My Montana Kitchen</p>
          <hr className="my-2" color='white' />
          <p>Welcome to the Dashboard where you as a Member of My Montana Kitchen can get to all your Member benefits</p>
          <p className="lead">
            <Button style={{margin: '1px'}} color="primary" href='/'>Home</Button>
            <Button style={{margin: '1px'}} color="primary" href='/account'>Account</Button>
            <Button style={{margin: '1px'}} color="primary" onClick={this.get_url}>Logout</Button>
          </p>
        </Container>
      </Jumbotron>
    )
  }
}
