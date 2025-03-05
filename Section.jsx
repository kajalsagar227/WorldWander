import React, { useState } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import '../css/Section.css';


function Section() {
    // const [objstyle,SetObjstyle] = useState(<Styleing/>)
    
    
  return (
    <div >
       <Card className="text-center bg-image d-md-block	" >
      <Card.Body>
        <Card.Title>
            <h1 className="h1" data-aos="fade-up">Enjoy Your Vacation With Us</h1>
        </Card.Title>
        <Card.Text>
            <h2 className="h2" data-aos="fade-up">The world is too big to stay in one place.</h2>
        </Card.Text>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Eg:India"
          aria-label="Eg:India"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" style={{backgroundColor: "black"}}>
          Search
        </Button>
      </InputGroup>
        </Card.Body>
        
    </Card>
    
    </div>
  )
}

export default Section
