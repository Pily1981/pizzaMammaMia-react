import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { Container, Row, Col } from "react-bootstrap";
import Quesos from '../assets/img/cuatroquesos.jpeg';
import Carne from '../assets/img/cuatrocarnes.jpeg';
import Pepperoni from '../assets/img/pepperoni.jpeg';


const Home = () => {
  return (
    <div className="home">
        <Header></Header>

        <Container className=" d-flex ">
            <Row className="g-4">
            <Col sm={12} md={6} lg={4}>

            <CardPizza 
                img={Quesos}
                titulo="Pizza 4 Quesos"
                precio={(5950).toLocaleString()}
                ingredientes={["mozzarella", "cheddar", "edam", "parmesano"].join(", ")}/>
            </Col>
            
            <Col sm={12} md={6} lg={4}>       
            <CardPizza
                img={Carne}
                titulo="Pizza 4 Carnes"
                precio={(6950).toLocaleString()}
                ingredientes={["mozzarela","pepperoni", "tocino", "mechada", "jamon"].join(", ")}/>
            </Col>
            
            <Col sm={12} md={6} lg={4}>
            <CardPizza 
                img={Pepperoni}
                titulo="Pizza Pepperoni"
                precio={(6950).toLocaleString()}
                ingredientes={["mozzarella", "pepperoni", "orégano"].join(", ")}/>
            </Col>
            </Row>
        </Container>
        
    </div>
  );
};


export default Home;