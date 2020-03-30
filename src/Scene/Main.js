import React from 'react'
import '../styles/Main.scss';
import FragmentPlayer from '../Components/FragmentPlayer.js';
import logo from './materials/logo.png'


const Sector = props => {
    return (
        <section id={props.id}
            style={{
                width:'auto',
                display: props.display,
                height: props.height,
                color: props.color,
                marginTop: props.marginTop,
                background: props.background
            }}>
            <h1 style={{
                margin: props.margin,
                font: props.fonth1,
                width: props.width,
                paddingTop: props.paddingTop,
                textAlign: props.textAlignh1
            }}>{props.h1}</h1>
           
                <p dangerouslySetInnerHTML={{ __html: props.p }}
                style={{
                    font: props.fontp,
                    textAlign: 'justify',
                    width: '40.35vw',
                    marginLeft: props.marginLeft
                }}></p>
                
                <a href={props.link} 
                style={{textDecoration: 'none', 
                color:'inherit', 
                display: 'block', 
                margin: props.anchormargin,  }} >
                    <p style={{font: '400 1.82vw Roboto',textAlign:'start' }} >{props.learn}
                    </p>
                </a>
            
            
        </section>
    )
}

const Main = () => {

    return (
        <main>
            <section id='banner'>
                <container className='mct1'>
                    <div className='mct2'>
                        <img src={logo}></img>
                        <h1>CULTURE</h1>
                        <p>We unite business and education. And much more...</p>
                    </div>
                </container>
                <FragmentPlayer url="https://www.youtube.com/embed/DfNUz2qlQkY" />
            </section>

            <Sector id='training' display='block'
                link='/training'
                anchormargin='0 0 0 22vw'
                learn='Learn more'
                height='36.49vw'
                width='45.56vw'
                color='white'
                marginTop='7.82vw'
                background='#002366'
                margin='0 0 0 46.14vw'
                fonth1='600 4.43vw Roboto'
                paddingTop='4.95vh'
                h1='TRAINING & COMPETITION'
                fontp='400 1.82vw Roboto'
                marginLeft='46.14vw'
                p="Every semester, thousands participants  from over 90 countries join the X-Culture competition.
               <br/><br/>They compete, collaborate, learn the challenges and best practices of international business consulting."
            />
            <Sector id='business' display='block'
                link='/business'
                anchormargin='0 0 0 72vw'
                learn='Learn more'
                height='40.14vw'
                color='black'
                marginTop='0'
                width='42.25vw'
                background='#FA9F42'
                margin='0 0 0 18.87vw'
                fonth1='600 4.43vw Roboto'
                paddingTop='5.21vw'
                h1='BUSINESS SOLUTIONS'
                fontp='400 1.82vw Roboto'
                marginLeft='18.87vw'
                p="Companies present their business challenges. Thousands of amateurs and professionals develop their solutions.
               <br/><br/>If there is something good for your business out there, they will find it and bring it to you."
            />
            <Sector id='research' display='block'
                link='/research'
                anchormargin='0 0 0 22vw'
                learn='Learn more'
                height='36.49vw'
                width='45.56vw'
                color='white'
                marginTop='0'
                background='#0B6E4F'
                margin='0 0 0 46.14vw'
                fonth1='600 4.43vw Roboto'
                paddingTop='5.21vw'
                h1='RESEARCH'
                fontp='400 1.82vw Roboto'
                marginLeft='46.14vw'
                p="Observing thousands of people in hundreds of global virtual teams every semester presents a unique research platform.
               <br/><br/>
               We will consider collecting new data or incorporating new experimental conditions for most interesting research proposals."
            />
            <Sector id='support' display='block'
                
                height='60.53vw'
                color='black'
                marginTop='0'
                background='#FDE74C'
                width='26.95vw'
                margin='0 auto 0 auto'
                fonth1='600 4.43vw Roboto'
                paddingTop='5.21vw'
                h1='SUPPORTED BY'
                textAlignh1='center'
                fontp='400 35px Roboto'
                marginLeft='46.14vw'
            />
            {/* 

               <sector id='m-training'>
               <h1>TRAINING & COMPETITION</h1>
                <p>Every semester, thousands participants  from over 90 countries join the X-Culture competition.
                <br/><br/>
                They compete, collaborate, learn the challenges and best practices of international business consulting.</p>
               </sector>

               <sector id='m-business'>
               <h1>BUSINESS SOLUTIONS</h1>
                <p>Companies present their business challenges. Thousands of amateurs and professionals develop their solutions.
                    <br/><br/>If there is something good for your business out there, they will find it and bring it to you.</p>
               </sector>

               <sector id='m-research'>
               <h1>RESEARCH</h1>
                <p>Observing thousands of people in hundreds of global virtual teams every semester presents a unique research platform.
                <br/><br/>
                We will consider collecting new data or incorporating new experimental conditions for most interesting research proposals.</p>
               </sector>

               <sector id='m-support'>
               <h1>SUPPORTED BY</h1>
                
        </sector> */}

        </main>

    )


}


export default Main