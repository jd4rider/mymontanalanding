import React from 'react';
import PotatoImg from '../assets/images/PotatoGreenBeans.png';
import RiceImg from '../assets/images/Rice.png';
import CoffeeImg from '../assets/images/Coffee.png';
import BagelImg from '../assets/images/Bagel.png'
import { Card, CardDeck, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default class RowOfCards extends React.Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <CardImg top width="100%" height="180px" src={PotatoImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" height="180px" src={CoffeeImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" height="180px" src={RiceImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" height="180px" src={BagelImg} alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    )
  }
}