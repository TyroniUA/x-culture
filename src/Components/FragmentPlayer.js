import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/StepsCard.scss';
const FragmentPlayer =(props)=> {
    return (

      <>
      <TransitionGroup>
            <CSSTransition key={props.p} timeout={300} classNames="stepscardAnimation">
      <iframe style={{  borderRadius: '25px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width:'58.96vw', 
      height:'33.16vw'}}
      title={props.title}
      src={props.url} 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
       >

      </iframe>
      </CSSTransition> 
            </TransitionGroup>
      </>
    )


}

export default FragmentPlayer;