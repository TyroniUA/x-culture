import React from 'react'

const TextListCard =(props) =>{
    return (
        <div style={{margin: '3vw 0 2vw 0'}}>
            <p style={{font:props.font}}>{props.ptext}</p>
            <ul>{props.listItems.map((e,i)=>{
                return <li style={{margin: props.margin}} key={i}>{e}</li>
            })}</ul>
            {props.children}
            
        </div>
    )
}

export default TextListCard;