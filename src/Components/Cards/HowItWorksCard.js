import React from 'react'
const HowItWorksCard = (props) => {

    return (
        <div id={props.id} style={{ width: '60vw', margin: '0vw auto 2vw auto' }}>
            <h4>{props.h4}</h4>
            <ul style={{ width: '55vw', margin: '0 auto 0 auto' }}>
                {props.listItems.map((element, index) => { return <li key={index}>{element}</li> })}

            </ul>
        </div>
    )
}

export default HowItWorksCard;