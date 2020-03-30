import React from 'react';

const CreatingListCard = (props) => {

    return (
        <div id={props.id} >
            <h4 style={{margin: '3vw 0 0 0'}}>{props.h4}</h4>
            <ul >
                {props.listItems.map((element, index) => { return <li key={index}>{element}</li> })}
            </ul>
        </div>
    )
}

export default CreatingListCard;