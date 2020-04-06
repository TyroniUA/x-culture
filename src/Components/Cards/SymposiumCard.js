import React from 'react'
import '../../styles/SymposiumCard.scss'
import Skeleton from 'react-loading-skeleton';

const SymposiumCard = (props) => {
    return (
        <div id={props.id} >
            <div><h4>{props.title || <Skeleton width='20vw'margin='1vw auto 2vw auto' count={1}/>}</h4></div>
            <div className='flex-justify'>
                <div className='sympColumn'>
                    {props.src==='' ? <Skeleton width='400px' height='200px' count={1}/>: <img src={props.src} maxWidth='100%' height='auto' style={{ borderRadius: '2vw', display: 'block', padding: '1vw' }} /> }
                    <p>{props.location ||<Skeleton width='10vw'count={1}/>}</p>
                    <p>{props.date ||<Skeleton width='10vw'count={1}/>}</p>
                    <p>{props.participants ||<Skeleton width='10vw' count={1}/>}</p>
                </div>
                <div className='secondColumn' >
                <p style={{ font: '400 1.5vw Roboto', padding: '2vw 2vw 1vw 1vw' }}>{props.text || <Skeleton width='40vw' count={6}/>}</p>
                <div className='marginBottom'>
                    <a href={props.link || <Skeleton count={1}/>} target='_blank'>Read More...</a>
                </div>
                
                </div>
                
            </div>


            <div>

            </div>
        </div>
    )
}

export default SymposiumCard;