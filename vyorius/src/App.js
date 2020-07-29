import React from 'react';
import VyoMain from "./components/VyoMain";
import VyoNavbar from "./components/VyoNavbar"
import  Container  from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';


function App() {
  const imgUrl = "https://vyorius.com/static/media/8.10880914.png";
  return (
    <div>
    <VyoNavbar/>
    <Container className="top" fluid>
          <Row>
          <VyoMain/>
          <Col>
          <img className="topImg" src={imgUrl} alt="head-img" fluid/>
          </Col>
          </Row>
    </Container>
    </div>
  );
}

export default App;
