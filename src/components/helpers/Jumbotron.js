import React from 'react';
import backgroundimg from '../../assets/images/table.png';
import logoimg from '../../assets/images/logo3.png';
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
      <Jumbotron style={{backgroundImage: 'url('+backgroundimg+')', backgroundSize: 'cover', color: 'black' }}> 
        <Container>
          <a href='/'><img src={logoimg} alt='My Montana Kitchen logo' width='325px'/></a>
          <h1 className="display-3">My Montana Kitchen Table</h1>
          <p className="lead">Welcome to your Member Dashboard</p>
          <hr className="my-2" color='black' />
          <p>Welcome to your Dashboard, where you, as a Member of the My Montana Kitchen Table Community, can access all the benefits of your membership!</p>
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
