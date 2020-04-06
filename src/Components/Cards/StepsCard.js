import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/StepsCard.scss';

const StepsCard = props => {
    return (
        <div id={props.id} style={{ width: '60vw' }} className="stepsCard">
            
           <div>
               
                <div id="row-tag">
                    
                        <div className="number" style={{ background: props.numberbckg }}>
                            {props.number}
                        </div>
                        
                        

                        <h2 style={{ width: props.h2width, color: props.h2color, textAlign: 'start' }}>
                            {props.h2}
                        </h2>
                       
                   
                </div>
                  
                    <p style={{ width: '50vw' }}>{props.p} </p>
                    </div>
                    
        </div>
    );
};

export default StepsCard;