import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import placeholderimage from "./placeholder.png"
// import data from "./projects.json"

const data = [
  { title: 'Card 1', body: 'This is the body of card 1' },
  { title: 'Card 2', body: 'This is the body of card 2' },
  { title: 'Card 3', body: 'This is the body of card 3' },
  { title: 'Card 4', body: 'This is the body of card 4' },
  { title: 'Card 5', body: 'This is the body of card 5' },
  { title: 'Card 6', body: 'This is the body of card 6' },
  { title: 'Card 7', body: 'This is the body of card 7' },
  { title: 'Card 8', body: 'This is the body of card 8' },
  { title: 'Card 9', body: 'This is the body of card 9' },
];

const cards = data.map((card, index) => (
  <Col key={index} xs={12} md={4}>
    <Card style={{ width: '25rem', margin: "15px" }}>
      <Image className='' src={placeholderimage} thumbnail />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.body}
        </Card.Text>
        <Button href="https://www.google.com" target="_blank">Visit App</Button>
      </Card.Body>
    </Card>
  </Col>
));


const GridExample = () => (
  <>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <span class="navbar-brand mb-0 h1">Project Dashboard</span>
  </div>
</nav>
  <Container className='p-4'>
    <Row>
      {cards}
    </Row>
  </Container>
  </>
);


export default GridExample;

{/* <Container className='p-4'>
<Row>
  {data.map(app => (<Col><Card>
      <img className='card-img-top' src={placeholderimage}  alt="Card image" height="200px"></img>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </Card.Text>
      </Card.Body>
    </Card></Col>))}
</Row>
</Container> */}