import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { MDBMask, MDBView } from "mdbreact";

export default class CardExt extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = () => {
      if((this.props.path).substr(0,4) === 'http') window.open(this.props.path, '_blank');
      else window.location.pathname = this.props.path;
    }

    this.state = {
      somewhere : null,
    }
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <MDBView hover zoom>
        <a href={this.state.somewhere}>
          <CardImg top width="100%" height="180px" src={this.props.image} alt={this.props.imagealt} style={{'object-fit': 'cover'}} />
          <CardBody style={{height:'156px'}} >
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.text}</CardText>
          </CardBody>
          <MDBMask className="flex-center" overlay="blue-slight" height='100%' style={{height:'100%'}}>
          </MDBMask>
          </a>
        </MDBView>
      </Card>
    )
  }
}