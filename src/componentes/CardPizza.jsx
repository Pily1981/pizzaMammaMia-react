import React from 'react';
import Button from "react-bootstrap/Button";
import Card  from 'react-bootstrap/Card';


const CardPizza = ({img, titulo, ingredientes, precio}) => {
  return (
    <>    
    <Card className="m-4" style={{ minHeight: "500px"}}>
        <Card.Img variant="top" src={img}/>
        
        <Card.Body>          
            <Card.Title className="text-center">
              <h5>{titulo}</h5></Card.Title>
              <hr />
            <Card.Text className="text-center">
              <h6>Ingredientes:</h6>
              <p>🍕{ingredientes}</p></Card.Text> 
              <hr />           
            <Card.Text className="text-center">
              <strong>Precio: </strong>${precio}</Card.Text>

            <div className="d-flex justify-content-around" >
                <Button variant="outline-dark btn">Ver más</Button>
                <Button className="btn btn-dark">Añadir 🛒</Button> 
            </div>

        </Card.Body>

    </Card>           
    </>
  );
};

export default CardPizza;