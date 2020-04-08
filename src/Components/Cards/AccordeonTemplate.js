import React from 'react'
import {Accordion, Badge, Card} from 'react-bootstrap/';

const AccordeonTemplate = (props) => {
    return (
        <Accordion defaultActiveKey={props.defaultActiveKey} className={props.className}> 
        <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{  cursor: 'pointer', margin: '0'}} >
        <h4 className='winner-card' >{props.title}</h4>
        </Accordion.Toggle>
                      
        
    
    <Accordion.Collapse eventKey="0">
        <Card.Body style={{padding: '0 0 0 2vw'}}>
            {props.children}
        
    </Card.Body>
    </Accordion.Collapse>

</Accordion>)
        
}
export default AccordeonTemplate;