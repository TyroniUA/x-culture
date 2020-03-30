import React from 'react'
import {Accordion, Badge, Card} from 'react-bootstrap/';

const AccordeonCard = (props) => {
    return (
        <Accordion defaultActiveKey="1" style={{ margin:'0 auto 0 auto'}}>                
        <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{color: 'black', cursor:'pointer', margin:'0 0 0 0', background: 'none', border:'none' }}>
        <h4>{props.menuButtonTitle}</h4>
        </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
        <Card.Body style={{padding: '0 0 0 2vw'}}>
            <ul >
                {props.listItems.map((element, index) => { return <li key={index}>{element}</li> })}
            </ul>
        
    </Card.Body>
    </Accordion.Collapse>

</Accordion>)
        
}
export default AccordeonCard;