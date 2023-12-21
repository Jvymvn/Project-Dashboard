import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { placeholderimage, timerImage, htmlSvg, cssSvg, jsSvg } from './components/Images';

const techs = {
  html: htmlSvg,
  css: cssSvg,
  jscript: jsSvg,
};

const data = [
  { id: 1, title: 'Countdown Timer', body: 'Count down the days, hours, minutes, and seconds until an event!', siteUrl: 'eclectic-liger-410959.netlify.app', img: timerImage, icons: ['html', 'css', 'jscript'] },
  { id: 2, title: 'Card 2', body: 'This is the body of card 2', siteUrl: 'www.google.com', img: placeholderimage, icons: ['html', 'css'] },
  { title: 'Card 3', body: 'This is the body of card 3', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 4', body: 'This is the body of card 4', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 5', body: 'This is the body of card 5', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 6', body: 'This is the body of card 6', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 7', body: 'This is the body of card 7', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 8', body: 'This is the body of card 8', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
  { title: 'Card 9', body: 'This is the body of card 9', siteUrl: "www.google.com", img: placeholderimage, icons: [] },
];

const TechIcons = ({ technologies }) => (
  <div className="tech-icons">
    {/* Add your SVG icons here based on the technologies array */}
    {technologies.map((tech, index) => (
      <img key={index} src={techs[tech]} alt={tech} className="tech-icon" style={{ maxWidth: '25px', maxHeight: '25px' }} />
    ))}
  </div>
);

const cards = data.map((card) => (
  <Col key={card.id} xs={12} md={4}>
    <Card style={{ width: '25rem', margin: '15px' }}>
      <Image className='' src={card.img} thumbnail />
      <Card.Body>
        <TechIcons technologies={card.icons} />
        <br/>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.body}</Card.Text>
        <Button href={`https://${card.siteUrl}`} target="_blank">
          Visit App
        </Button>
        
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