import React from 'react'

const TextListCard =(props) =>{
    return (
        <div style={{margin: '3vw 0 2vw 0'}}>
            <p>{props.ptext}</p>
            <ul>{props.listItems.map((e,i)=>{
                return <li key={i}>{e}</li>
            })}</ul>
            
        </div>
    )
}

export default TextListCard;